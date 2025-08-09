import WorkoutHeader from "./WorkoutHeader";
import '../WorkoutsCss/WorkoutHome.css'
import HomeImg from '../UserWorkoutsImg/homeworkout.png'
import { Link } from "react-router-dom";


function WorkoutHomePage(){
    return(
        <>
            <WorkoutHeader />
            <div className="Workout-home-body">
               <div className="workout-home-section">
                <div className="workout-home-img">
                    <img src={HomeImg} alt="" />
                </div>

               <div className="workout-home-text">
                <div className="workout-home-text-header">
                    <h1>Start Your Fitness Journey</h1>
                </div>

                <div className="workout-home-text-body">
                    <p>
                        Discover a wide range of workouts: strength training, cardio, stretching, and beginner-friendly programs. 
                        Choose your plan and start transforming your body today!
                    </p>
                </div>

                <div className="workout-home-btn-btn">
                    <Link to="/user/workoutplan">
                    <button>Check Workout Plan</button>
                    </Link>
                </div>
                </div>

               </div>
            </div>
        </>
    )
}

export default WorkoutHomePage;