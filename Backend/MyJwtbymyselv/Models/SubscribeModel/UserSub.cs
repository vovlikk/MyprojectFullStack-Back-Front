using System.ComponentModel.DataAnnotations.Schema;

namespace MyJwtbymyselv.Models.SubscribeModel
{
    public class UserSub
    {
        public int Id { get; set; }
        public string UserId { get; set; } = null!;

        public int SubscriptionId { get; set; }

        [ForeignKey(nameof(SubscriptionId))]
        public UserSubPlan? SubscribePlan { get; set; }
    }
}
