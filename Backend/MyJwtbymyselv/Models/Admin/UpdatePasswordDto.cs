using System.ComponentModel.DataAnnotations;

namespace MyJwtbymyselv.Models.Admin
{
    public class UpdatePasswordDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

         
        
        public string Password { get; set; }
    }
}
