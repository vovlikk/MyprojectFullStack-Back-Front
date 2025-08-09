using System.ComponentModel.DataAnnotations;

namespace MyJwtbymyselv.Models.Admin
{
    public class AdminChangeEmail
    {
        [Required]
        [EmailAddress]
        public string CurrentEmail { get; set; } 


        [Required]
        [EmailAddress]
        public string NewEmail {  get; set; }
    }
}
