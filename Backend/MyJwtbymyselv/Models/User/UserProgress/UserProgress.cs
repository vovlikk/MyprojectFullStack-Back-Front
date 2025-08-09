namespace MyJwtbymyselv.Models.User.UserProgress
{
    public class UserProgress
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        public DateTime DateTime { get; set; }


        public float Weigth { get; set; }

        public float BodyFatPercentage { get; set; }

        public float BMI {  get; set; }


        // workout type

        public string WorkoutType {  get; set; }
        public string WorkoutNotes { get; set; }

        // energy

        public int EnergyLevel { get; set; }

        public string Goals {  get; set; }
    }
}
