import WorkoutDanceInfo from "../UserWorkoutComponents/WorkoutDanceComponent/WorkoutDanceInfo";
import WorkoutDanceHome from "../UserWorkoutComponents/WorkoutDanceComponent/WorkoutDanceHome";
import WorkoutHeader from "./WorkoutHeader";
import Footer from '../../../../components/Footer'

function WorkoutDanceLanding(){
    return(
        <div>
            <WorkoutHeader />
            <WorkoutDanceHome />
            <WorkoutDanceInfo />
            <Footer />
        </div>
    )
}

export default WorkoutDanceLanding;