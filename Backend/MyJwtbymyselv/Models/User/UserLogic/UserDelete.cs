using System.ComponentModel.DataAnnotations;

namespace MyJwtbymyselv.Models.User.UserLogic
{
    public class UserDelete
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public string Password { get; set; }
    }
}
