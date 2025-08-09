using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyJwtbymyselv.Data;
using MyJwtbymyselv.Models.User.UserNotes;

namespace MyJwtbymyselv.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserNoteController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly AuthenticationDbContext _authenticationDbContext;

        public UserNoteController(UserManager<IdentityUser> userManager, AuthenticationDbContext authenticationDbContext)
        {
            _userManager = userManager;
            _authenticationDbContext = authenticationDbContext;
        }

        [HttpGet("get-all-notes")]
        public async Task<IActionResult> GetAllNote()
        {
            var user = await _userManager.GetUserAsync(User);

            var notes = await _authenticationDbContext.UserNotes.Where(e => e.UserId == user.Id)
                .Select(e => new
                {
                    e.Id,
                    e.Note
                }).ToListAsync();

            return Ok(notes);
        }


        [HttpPost("post-new-note")]
        public async Task<IActionResult> AddNewNote([FromBody] UserNotesDto dto)
        {
            var user = await _userManager.GetUserAsync(User);

            if (dto == null || string.IsNullOrWhiteSpace(dto.Note))
            {
                return BadRequest("Note cannot be empty");
            }

            var note = new UserNotes
            {
                Note = dto.Note,
                UserId = user.Id
            };

            _authenticationDbContext.UserNotes.Add(note);
            await _authenticationDbContext.SaveChangesAsync();

            return Ok("Note added successfully");
        }

        [HttpDelete("deleteNote/{id}")]
        public async Task<IActionResult> DeleteNote(int id)
        {
            var user = await _userManager.GetUserAsync(User);

            var idfound = await _authenticationDbContext.UserNotes.FirstOrDefaultAsync(e => e.Id == id);

            if (idfound.UserId != user.Id)
            {
                return Forbid();
            }

            if (idfound == null)
            {
                return NotFound("Id not found");
            }


            _authenticationDbContext.UserNotes.Remove(idfound);
            await _authenticationDbContext.SaveChangesAsync();

            return Ok("Was Succesfull Deleted");
        }

        [HttpPut("change-note/{id}")]
        public async Task<IActionResult> ChangeNote(int id, [FromBody] UserNotesChange userNotesChange)
        {
            var user = await _userManager.GetUserAsync(User);

            var existingNote = await _authenticationDbContext.UserNotes.FirstOrDefaultAsync(e => e.Id == id);
            if (existingNote == null)
            {
                return NotFound("Note not found");
            }

            
            if (existingNote.UserId != user.Id)
            {
                return Forbid("You are not allowed to modify this note");
            }


            existingNote.Note = userNotesChange.ChangeNote;

            await _authenticationDbContext.SaveChangesAsync();
            return Ok("Note was Changed");
        }
        
    } 
}
