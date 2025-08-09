using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyJwtbymyselv.Data;
using MyJwtbymyselv.Models.ReviewModel;

using MyJwtbymyselv.Models.SupportModel;
using MyJwtbymyselv.Models.User;
using MyJwtbymyselv.Models.User.UserLogic;
using System.Threading.Tasks;

namespace MyJwtbymyselv.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
            private readonly AuthenticationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;

        public UserController(AuthenticationDbContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [Authorize]
        [HttpPost("submit-message-tosupport")]
        public async Task<IActionResult> SubmitMessageToSupport([FromBody] SupportDto support)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _userManager.GetUserAsync(User);
            if (user is null)
                return Unauthorized("Пользователь не найден.");

            var supportMessage = new SupportModel
            {
                UserName = support.UserName,
                Description = support.Description.Trim()
            };

            await _context.Support.AddAsync(supportMessage);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Сообщение отправлено в поддержку.",
                user = new
                {
                    id = user.Id,
                    name = user.UserName // или user.FullName, если ты его добавил в IdentityUser
                }
            });
        }

        [Authorize]
        [HttpPost("submit-review-tosupport")]
        public async Task<IActionResult> SubmitReviewToSupport([FromBody] ReviewsModel review)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _userManager.GetUserAsync (User);
            if (user == null)
                return Unauthorized("Пользователь не найден.");

            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();

            return Ok("Review was submit");
        }

        [Authorize]
        [HttpDelete("delete-user")]
        public async Task<IActionResult> DeleteUser([FromBody] UserDelete UserModeldto)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return NotFound("User not found");

            var isPasswordCorrect = await _userManager.CheckPasswordAsync(user, UserModeldto.Password);
            if (!isPasswordCorrect)
                return BadRequest("Invalid password");

            var result = await _userManager.DeleteAsync(user);
            if (!result.Succeeded)
                return StatusCode(500, "Failed to delete user");

            return Ok("User deleted successfully");
        }

        [Authorize]
        [HttpPost("add-number")]
        public async Task<IActionResult> AddNumber([FromBody] UserNumberTelefone userNumberTelefone)
        {
            if (userNumberTelefone == null || string.IsNullOrWhiteSpace(userNumberTelefone.TelefoneNumber))
                return BadRequest("Enter Number");

            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return NotFound("User not found");

            var result = await _userManager.SetPhoneNumberAsync(user,userNumberTelefone.TelefoneNumber);

            if (result.Succeeded)
                return Ok("Phone number added successfully.");
            else
                return StatusCode(500, "An error occurred while adding the phone number.");

           
        }

        [Authorize]
        [HttpPut("change-number")]
        public async Task<IActionResult> ChangeNumber([FromBody] UserChangeNumber userChangeNumber)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return NotFound("User not found");

            var token = await _userManager.GenerateChangePhoneNumberTokenAsync(user, userChangeNumber.NewNumber);

            var result = await _userManager.ChangePhoneNumberAsync(user, userChangeNumber.NewNumber, token);
            if (!result.Succeeded)
                return BadRequest("Failed to change phone number");

            return Ok("Phone number changed");
        }

        [Authorize]
        [HttpPut("change-password")]
        public async Task<IActionResult> ChangePassword([FromBody] UserChangePassword userChangePassword)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return NotFound("User not found");

            var isPasswordValid = await _userManager.CheckPasswordAsync(user, userChangePassword.CurrentlyPassword);
            if (!isPasswordValid)
                return BadRequest("Incorrect current password+");

            var result = await _userManager.ChangePasswordAsync(user, userChangePassword.CurrentlyPassword, userChangePassword.NewPassword);
            if (!result.Succeeded)
                return BadRequest("Fail to change password");

            return Ok("Password was successfully changed");
        }

        [Authorize]
        [HttpPut("change-email")]
        public async Task<IActionResult> ChangeEmail([FromBody] ChangeUserEmail model)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return NotFound("User not found");

            var isPasswordCorrect = await _userManager.CheckPasswordAsync(user, model.Password);
            if (!isPasswordCorrect)
                return BadRequest("Invalid password");

            var token = await _userManager.GenerateChangeEmailTokenAsync(user, model.NewEmail);
            var result = await _userManager.ChangeEmailAsync(user, model.NewEmail, token);

            if (!result.Succeeded)
                return BadRequest("Fail to change email");

            user.UserName = model.NewEmail;
            await _userManager.UpdateAsync(user);

            return Ok("Email was successfully changed");
        }


        


    }
}
