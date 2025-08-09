using System.ComponentModel.DataAnnotations;

namespace MyJwtbymyselv.Models.AuthenticationModels
{
    public class Register
    {
        [Required]
        [EmailAddress]
        public string Email {  get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
