using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyJwtbymyselv.Data;
using MyJwtbymyselv.Models.User.UserProgress;

namespace MyJwtbymyselv.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProgressController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly AuthenticationDbContext _authenticationDbContext;

        public UserProgressController(UserManager<IdentityUser> userManager, AuthenticationDbContext authenticationDbContext)
        {
            _userManager = userManager;
            _authenticationDbContext = authenticationDbContext;
        }

        [HttpGet("get-bodymeasurements")]
        public async Task<IActionResult> GetBodyMeasurements()
        {
            var user = await _userManager.GetUserAsync(User);

            var training = await _authenticationDbContext.UserProgresses.Where(p => p.UserId == user.Id)
                .OrderBy(d => d.DateTime)
                .Select(p => new BodyMeasurementsDto
                {
                    Date = p.DateTime,
                    Weigth = p.Weigth,
                    BMI = p.BMI,
                    BodyFatPercentage = p.BodyFatPercentage,
                })
                .ToListAsync();

            return Ok(training);
        }

        [HttpPost("post-bodymeasurements")]

        public async Task<IActionResult> AddBodyMeasurements([FromBody] BodyMeasurementsDto dto)
        {
            var user = await _userManager.GetUserAsync(User);

            var add = new UserProgress
            {
                UserId = user.Id,
                DateTime = dto.Date,    
                Weigth = dto.Weigth,
                BMI = dto.BMI,
                BodyFatPercentage = dto.BodyFatPercentage,
                
            };

            _authenticationDbContext.UserProgresses.Add(add);
            await _authenticationDbContext.SaveChangesAsync();

            return Ok("was succesfull added");
        }

        [HttpGet("get-workout-info")]
        public async Task<IActionResult> GetWorkoutInfo()
        {
            var user = await _userManager.GetUserAsync (User);

            var info = await _authenticationDbContext.UserProgresses.Where(p => p.UserId == user.Id)
                .OrderBy(p => p.DateTime)
                .Select(p => new WorkoutInfoDto
                {
                    Date = p.DateTime,
                    WorkoutNotes = p.WorkoutNotes,
                    WorkoutType = p.WorkoutType,
                }).ToListAsync();

            return Ok(info);
        }

        [HttpPost("post-workout-info")]
        public async Task<IActionResult> PostWorkoutInfo([FromBody] WorkoutInfoDto dto)
        {
            var user = await _userManager.GetUserAsync (User);

            var info = new UserProgress
            {

                UserId = user.Id,
                WorkoutNotes = dto.WorkoutNotes,
                WorkoutType = dto.WorkoutType,
            };

            _authenticationDbContext.UserProgresses.Add(info);
            await _authenticationDbContext.SaveChangesAsync();

            return Ok("Was sucessfull added");
        }

        [HttpGet("get-energy-and-goals")]
        public async Task<IActionResult> GetEnergyAndGoals()
        {
            var user =await _userManager.GetUserAsync(User);

            var info = await _authenticationDbContext.UserProgresses.Where(p => p.UserId == user.Id)
               .OrderBy(p => p.DateTime)
               .Select(user => new EnergyAndGoalsDto
               {
                   Date = user.DateTime,
                   EnergyLevel = user.EnergyLevel,
                   Goals = user.Goals,
               }).ToListAsync();
             
            return Ok(info);
        }

        [HttpPost("post-energy-and-goals")]
        public async Task<IActionResult> PostEnergyAndGoals([FromBody] EnergyAndGoalsDto dto)
        {
            var user = await _userManager.GetUserAsync (User);

            var info = new UserProgress
            {

                UserId = user.Id,
                DateTime = dto.Date,
                EnergyLevel = dto.EnergyLevel,
                Goals = dto.Goals,
            };
            _authenticationDbContext.UserProgresses.Add(info);
           await _authenticationDbContext.SaveChangesAsync();

            return Ok("Was succesfull added");
        }
    }
}
