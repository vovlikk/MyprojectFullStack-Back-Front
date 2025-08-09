namespace MyJwtbymyselv.Models.User.UserCalendar
{
    public class UserCalendar
    {
        public int Id { get; set; }

        public DateTime DateTime { get; set; }

        public string Type { get; set; } = string.Empty;

        public string Note { get; set; } = string.Empty;

        public string UserId { get; set; } 


    }
}
