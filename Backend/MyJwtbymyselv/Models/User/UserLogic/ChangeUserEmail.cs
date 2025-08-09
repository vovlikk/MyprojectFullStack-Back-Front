using System.ComponentModel.DataAnnotations;

namespace MyJwtbymyselv.Models.User.UserLogic
{
    public class ChangeUserEmail
    {
        
        [Required]
        [EmailAddress]
        public string NewEmail { get; set; }
        public string Password { get; set; }
    }
}
