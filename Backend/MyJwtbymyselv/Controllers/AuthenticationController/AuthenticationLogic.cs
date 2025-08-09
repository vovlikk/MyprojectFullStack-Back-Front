using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MyJwtbymyselv.Models.Admin;
using MyJwtbymyselv.Models.AuthenticationModels;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MyJwtbymyselv.Controllers.AuthenticationController
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;

        public ValuesController(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Register register)
        {
            
            var existingUser = await _userManager.FindByEmailAsync(register.Email);
            if (existingUser != null)
            {
                return BadRequest("Пользователь с таким Email уже существует.");
            }

            var user = new IdentityUser
            {
                Email = register.Email,
                UserName = register.UserName
            };

            var result = await _userManager.CreateAsync(user, register.Password);

            if (result.Succeeded)
            {
                if (!await _roleManager.RoleExistsAsync("User"))
                    await _roleManager.CreateAsync(new IdentityRole("User"));
                await _userManager.AddToRoleAsync(user, "User");

                return Ok("Пользователь зарегистрирован и получил роль User");
            }

            return BadRequest(result.Errors);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login login)
        {
            var user = await _userManager.FindByNameAsync(login.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, login.Password))
            {

                var UserRoles = await _userManager.GetRolesAsync(user);
                var claims = new List<Claim>
                {
                   new Claim(ClaimTypes.Name, login.UserName),
                   new Claim(ClaimTypes.NameIdentifier, user.Id),
                   new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())

                };

                foreach (var role in UserRoles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, role));
                }

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtTokens:Key"]));
                var issuer = _configuration["JwtTokens:Issuer"];
                var audience = _configuration["JwtTokens:Audience"];

                var signing = new SigningCredentials(key,SecurityAlgorithms.HmacSha512);

                var token = new JwtSecurityToken(

                    issuer: issuer,
                    audience: audience,
                    claims: claims,
                    signingCredentials: signing,
                    expires: DateTime.UtcNow.AddHours(3)
                    );

                var jwt = new JwtSecurityTokenHandler().WriteToken(token);

                return Ok(new { token = jwt });
            }

            return Unauthorized(new {Message = "Неверное имя пользователя или пароль" });
        }


        [HttpGet("profile")]
        [Authorize]
        public async Task<IActionResult> GetUser()
        {
            var userid = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if(userid == null)
            {
                return Unauthorized();
            }

            var user = await _userManager.FindByIdAsync(userid);
            if(user == null)
            {
                return NotFound("User not found");
            }

            return Ok(new
            {
                userName = user.UserName,
                email = user.Email,
                phone = user.PhoneNumber
            });
        }



    }
}
