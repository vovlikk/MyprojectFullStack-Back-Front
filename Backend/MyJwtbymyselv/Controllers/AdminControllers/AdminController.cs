using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyJwtbymyselv.Data;
using MyJwtbymyselv.Migrations;
using MyJwtbymyselv.Models;
using MyJwtbymyselv.Models.Admin;

namespace MyJwtbymyselv.Controllers.AdminControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly AuthenticationDbContext _authenticationDbContext;
        
        public AdminController(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager, AuthenticationDbContext authenticationDbContext)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _authenticationDbContext = authenticationDbContext;
        }

        
        [HttpGet("get-all-users")]
        public async Task<IActionResult> GetAllUsers()
        {
            var getall = await _userManager.Users.Select(u => new
            {
                
                u.UserName,
                u.Email
            }).ToListAsync();
            return Ok(getall);
        }

        
        [HttpDelete("delete-user")]
        public async Task<IActionResult> DeleteUser([FromBody] DeleteUserAdminDto adminModeldto)
        {
            var user = await _userManager.FindByNameAsync(adminModeldto.UserName);
            if (user == null)
            {
                return NotFound("User not found");
            }
            var result = await _userManager.DeleteAsync(user);
            if (!result.Succeeded)
            {
                return StatusCode(500, "User deletion error");
            }
            return Ok("User delete succesfull");
        }

        
        [HttpPut("user-update-password")]
        public async Task<IActionResult> UpdatePassword([FromBody] UpdatePasswordDto updatepasswordDto)
        {
            var user = await _userManager.FindByEmailAsync(updatepasswordDto.Email);

            if(user == null)
            {
                return NotFound("User not found");
            }
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var result = await _userManager.ResetPasswordAsync(user, token, updatepasswordDto.Password);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            return Ok("Password was successfully changed");


        }


        [Authorize(Roles = "Admin")]
        [HttpPost("add-role-admin")]
        public async Task<IActionResult> AddRoleAdmin([FromBody] AddRoleDto    addroledtol)
        {
            var user = await _userManager.FindByNameAsync(addroledtol.UserName);
            if (user == null)
            {
                return NotFound("User not found");
            }

            if(!await _roleManager.RoleExistsAsync("Admin")){
                await _roleManager.CreateAsync(new IdentityRole("Admin"));
            }

            var result = await _userManager.AddToRoleAsync(user, "Admin");

            if (!result.Succeeded)
            {
                return BadRequest("User didn't get the role");
            }

            return Ok("User got the role Admin");
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("support-messages")]

        public async Task<IActionResult> GetAllMessagesFromSupport()
        {
            var sms = await _authenticationDbContext.Support.Select(e => new
            {
                e.Id,
                e.Description,
                e.UserName
            }).ToListAsync();

            return Ok(sms);
        }

        [HttpDelete("delete-sms/{id}")]
        public async Task<IActionResult> DeleteSupportSms(int id)
        {
            var sms = await _authenticationDbContext.Support.FirstOrDefaultAsync(e => e.Id == id);

            if (sms == null)
            {
                return NotFound($"SMS with ID {id} not found.");
            }

            _authenticationDbContext.Support.Remove(sms);
            await _authenticationDbContext.SaveChangesAsync();

            return Ok($"SMS with ID {id} was deleted successfully.");
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("reviews-messages")]
        public async Task<IActionResult> GetAllReviewsFromSupport()
        {
            var reviews = await _authenticationDbContext.Reviews.ToListAsync();
            return Ok(reviews);
        }
        [Authorize(Roles = "Admin")]
        [HttpPut("admin-change-email")]
        public async Task<IActionResult> ChangeEmail([FromBody] AdminChangeEmail adminChangeEmail) 
        {
            var user = await _userManager.FindByEmailAsync(adminChangeEmail.CurrentEmail);

            if (user == null)
            {
                return NotFound("User not found");
            }
            var token =await  _userManager.GenerateChangeEmailTokenAsync(user,adminChangeEmail.NewEmail);

            var result =await _userManager.ChangeEmailAsync(user,adminChangeEmail.NewEmail,token);

            if (result.Succeeded)
            {
                return Ok("Электронная почта успешно изменена.");
            }

            return BadRequest(result.Errors);
        }
    }
}
