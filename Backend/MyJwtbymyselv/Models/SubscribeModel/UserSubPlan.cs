namespace MyJwtbymyselv.Models.SubscribeModel
{
    public class UserSubPlan
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;

        public int Price { get; set; }
        public string Description { get; set; } = "";
    }
}
