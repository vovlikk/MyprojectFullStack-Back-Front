using System.ComponentModel.DataAnnotations;

namespace MyJwtbymyselv.Models.Admin
{
    public class AdminModel
    {
        public int Id { get; set; }

        
        public string Email {  get; set; }
        public string UserName {  get; set; }

        public string   Password { get; set; }
    }
}
