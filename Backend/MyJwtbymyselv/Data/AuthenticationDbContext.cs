using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyJwtbymyselv.Models.NewsModel;
using MyJwtbymyselv.Models.ReviewModel;
using MyJwtbymyselv.Models.SubscribeModel;
using MyJwtbymyselv.Models.SupportModel;
using MyJwtbymyselv.Models.User.UserCalendar;
using MyJwtbymyselv.Models.User.UserNotes;
using MyJwtbymyselv.Models.User.UserProgress;
using MyJwtbymyselv.Models.User.UserWorkouts;

namespace MyJwtbymyselv.Data
{
    public class AuthenticationDbContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<ReviewsModel> Reviews { get; set; }
        public DbSet<SupportModel> Support { get; set; }

      
        public DbSet<UserProgress> UserProgresses { get; set; }

        public DbSet<UserSub> userSub { get; set; }
        public DbSet<UserSubPlan> userSubPlan { get; set; }

        public DbSet<UserCalendar> userCalendar {  get; set; }

        public DbSet<UserNotes> UserNotes { get; set; }

        public DbSet<UserWorkout> userWorkouts { get; set; }

        public DbSet<News> News { get; set; }
        public AuthenticationDbContext(DbContextOptions<AuthenticationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserSubPlan>().HasData(
                new UserSubPlan { Id = 1, Name = "Basic", Price = 25, Description = "Basic subscription plan" },
                new UserSubPlan { Id = 2, Name = "Mid", Price = 55, Description = "Mid tier plan with more features" },
                new UserSubPlan { Id = 3, Name = "Pro", Price = 75, Description = "Professional plan for advanced users" },
                new UserSubPlan { Id = 4, Name = "Athlet", Price = 105, Description = "Athlete plan with premium features" }

        );
        }
        

        
    }
}
