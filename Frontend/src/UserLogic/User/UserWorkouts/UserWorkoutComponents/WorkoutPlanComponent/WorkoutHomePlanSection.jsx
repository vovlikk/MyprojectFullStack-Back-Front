import Img from '../../UserWorkoutsImg/Plan/homeplanimg.png'
import '../../WorkoutsCss/Plan/WorkoutHomePlan.css'

function WorkoutHomePlanSection(){
    return(
    <div className="workout-plan-container">
        <div className="workout-plan-section">
            <div className="workout-plan-image">
            <img src={Img} alt="" />
            </div>

            <div className="workout-plan-content">
                <div className="workout-plan-header">
                   <h1> THE BEST GYM WORKOUT PLAN FOR GAINING MUSCLE</h1>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WorkoutHomePlanSection;