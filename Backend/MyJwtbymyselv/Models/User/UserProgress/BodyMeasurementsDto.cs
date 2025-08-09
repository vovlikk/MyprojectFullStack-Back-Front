namespace MyJwtbymyselv.Models.User.UserProgress
{
    public class BodyMeasurementsDto
    {
        public DateTime Date { get; set; }
        public float Weigth { get; set; }

        public float BodyFatPercentage { get; set; }

        public float BMI { get; set; }
    }
}
