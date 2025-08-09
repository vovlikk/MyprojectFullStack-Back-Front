using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyJwtbymyselv.Data;
using MyJwtbymyselv.Models.SubscribeModel;

namespace MyJwtbymyselv.Controllers.UserControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribeController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly AuthenticationDbContext _authenticationDbContext;

        public SubscribeController(UserManager<IdentityUser> userManager, AuthenticationDbContext authenticationDbContext)
        {
            _userManager = userManager;
            _authenticationDbContext = authenticationDbContext;
        }


        [HttpGet("plans")]
        public async Task<IActionResult> GetPlans()
        {
            var plans = await _authenticationDbContext.userSubPlan.ToListAsync();
            return Ok(plans);
        }

        [HttpGet("my-subscriptions")]
        public async Task<IActionResult> GetMySubscriptions()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return Unauthorized();

            var subscriptions = await _authenticationDbContext.userSub
                .Include(us => us.SubscribePlan)
                .Where(us => us.UserId == user.Id)
                .ToListAsync();

            return Ok(subscriptions);
        }

        [HttpPost("subscribe/{planId}")]
        public async Task<IActionResult> Subscribe(int planId)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return Unauthorized();

            var plan = await _authenticationDbContext.userSubPlan.FindAsync(planId);
            if (plan == null)
                return NotFound("Subscription plan not found");

            var existingSubscription = await _authenticationDbContext.userSub
                .AnyAsync(us => us.UserId == user.Id && us.SubscriptionId == planId);
            if (existingSubscription)
                return BadRequest("You are already subscribed to this plan.");

            var userSubscription = new UserSub
            {
                UserId = user.Id,
                SubscriptionId = planId
            };

            _authenticationDbContext.userSub.Add(userSubscription);
            await _authenticationDbContext.SaveChangesAsync();

            return Ok(userSubscription);
        }

        [HttpDelete("unsubscribe/{subscriptionId}")]
        public async Task<IActionResult> Unsubscribe(int subscriptionId)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return Unauthorized();

            var subscription = await _authenticationDbContext.userSub
                .FirstOrDefaultAsync(us => us.Id == subscriptionId && us.UserId == user.Id);

            if (subscription == null)
                return NotFound();

            _authenticationDbContext.userSub.Remove(subscription);
            await _authenticationDbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
