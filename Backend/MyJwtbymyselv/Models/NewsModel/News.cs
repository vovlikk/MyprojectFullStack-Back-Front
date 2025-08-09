using System.ComponentModel.DataAnnotations;

namespace MyJwtbymyselv.Models.NewsModel
{
    public class News
    {
        public int Id { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
