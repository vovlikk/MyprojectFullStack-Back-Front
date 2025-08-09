using System.ComponentModel.DataAnnotations;

namespace MyJwtbymyselv.Models.ReviewModel
{
    public class ReviewsModel
    {
        public int Id { get; set; }



        [Required]
        public string Review { get; set; }  

    }
}
