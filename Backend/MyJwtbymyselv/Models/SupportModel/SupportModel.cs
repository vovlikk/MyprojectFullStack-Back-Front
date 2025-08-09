using System.ComponentModel.DataAnnotations;

namespace MyJwtbymyselv.Models.SupportModel
{
    public class SupportModel
    {

        public int Id { get; set; }

        public string UserName {  get; set; }

        [Required]
        [MaxLength(500)]
        public string Description {  get; set; } = null!;

        
    }
}
