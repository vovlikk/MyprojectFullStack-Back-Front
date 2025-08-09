using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyJwtbymyselv.Data;
using MyJwtbymyselv.Models.User.UserWorkouts;
using System.Globalization;

namespace MyJwtbymyselv.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProgressWorkoutsController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly AuthenticationDbContext _authenticationContext;

        public UserProgressWorkoutsController(UserManager<IdentityUser> userManager, AuthenticationDbContext authenticationContext)
        {
            _userManager = userManager;
            _authenticationContext = authenticationContext;
        }

        [HttpGet("workouts-everymounth")]
        public async Task<IActionResult> GetAllWorkouts()
        {
            var user = await _userManager.GetUserAsync(User);

            var workouts = await _authenticationContext.userWorkouts
               .Where(p => p.UserId == user.Id)
               .GroupBy(p => p.Month)
               .Select(g => new
               {
                   Month = g.Key,
                   Count = g.Sum(x=> x.Workout)
               })
               .ToListAsync();


            var result = Enumerable.Range(1, 12).Select(m => new UserWorkoutDto
            {
                Month = m,
                Workout = workouts.FirstOrDefault(v => v.Month == m)?.Count ?? 0
            }).ToList();

            return Ok(result);
        }

        [HttpPut("change-workout-info")]
        public async Task<IActionResult> ChangeWorkoutsInfo([FromBody] UserWorkoutDto workout)
        {
            var user = await _userManager.GetUserAsync(User);

            var traine = await _authenticationContext.userWorkouts.FirstOrDefaultAsync(e => e.UserId == user.Id && e.Month == workout.Month);

            if(traine == null)
            {
                var newtraine = new UserWorkout
                {
                    UserId = user.Id,
                    Month = workout.Month,
                    Workout = workout.Workout,
                };
                _authenticationContext.userWorkouts.Add(newtraine);
            }
            else
            {
                traine.Workout = workout.Workout;
                _authenticationContext.userWorkouts.Update(traine);

            }
          await  _authenticationContext.SaveChangesAsync();
            return Ok(workout);
        }

    }
}
