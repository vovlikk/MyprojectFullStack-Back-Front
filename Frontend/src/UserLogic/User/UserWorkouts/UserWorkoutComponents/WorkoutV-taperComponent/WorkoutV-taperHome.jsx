import '../../WorkoutsCss/V-form/Workout-vform-home.css'
import VformImg from '../../UserWorkoutsImg/V-Form/v-form.jpg'

function WorkoutVtaperHome (){
    return(
        <div className="workout-V-taper-home">
            <div className="workout-v-taper-section">
                <div className="workout-v-taper-img">
                    <img src={VformImg} alt="" />
                </div>

                <div className="workout-v-taper-text">
                    <h1>HOW TO BUILD A V-TAPER PHYSIQUE: WORKOUTS, MUSCLES & TRAINING TIPS</h1>
                </div>
            </div>
        </div>
    )
}

export default WorkoutVtaperHome;