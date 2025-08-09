using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyJwtbymyselv.Data;
using MyJwtbymyselv.Models.User.UserCalendar;
using System.Globalization;

namespace MyJwtbymyselv.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize] // ✅ добавь это, если не стоит выше
    public class UserCalendarEventsController : ControllerBase
    {
        private readonly AuthenticationDbContext _authenticationDbContext;
        private readonly UserManager<IdentityUser> _userManager;

        public UserCalendarEventsController(AuthenticationDbContext authenticationDbContext, UserManager<IdentityUser> userManager)
        {
            _authenticationDbContext = authenticationDbContext;
            _userManager = userManager;
        }

        [HttpGet("{month}")]
        public async Task<IActionResult> GetAllEvents(string month)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return Unauthorized();

            if (!DateTime.TryParseExact(month, "yyyy-MM", null, DateTimeStyles.None, out var parsedMonth))
            {
                return BadRequest("Invalid month format. Expected format: yyyy-MM");
            }

            var events = await _authenticationDbContext.userCalendar
                .Where(e => e.UserId == user.Id &&
                            e.DateTime.Year == parsedMonth.Year &&
                            e.DateTime.Month == parsedMonth.Month)
                .Select(e => new UserCalendarDto
                {
                    Date = e.DateTime.ToString("yyyy-MM-dd"),
                    Type = e.Type,
                    Note = e.Note
                })
                .ToListAsync();

            return Ok(events);
        }

        [HttpPost("add-progress")]
        public async Task<IActionResult> AddProgress([FromBody] UserCalendarDto dto)
        {
            if (dto == null)
                return BadRequest("Invalid data");

            if (!DateTime.TryParseExact(dto.Date, "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out var date))
            {
                return BadRequest("Invalid date format");
            }

            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return Unauthorized();

            var progressEvent = new UserCalendar
            {
                UserId = user.Id,
                DateTime = date,
                Type = dto.Type,
                Note = dto.Note
            };

            _authenticationDbContext.userCalendar.Add(progressEvent);
            await _authenticationDbContext.SaveChangesAsync();

            return Ok("Event was added");
        }
    }
}
  