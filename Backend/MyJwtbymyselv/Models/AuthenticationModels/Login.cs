using System.ComponentModel.DataAnnotations;

namespace MyJwtbymyselv.Models.AuthenticationModels
{
    public class Login
    {
        public int Id { get; set; }

        
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
