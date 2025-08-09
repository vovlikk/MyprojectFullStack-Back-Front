import WorkoutHeader from "./WorkoutHeader";
import WorkoutHomePlanSection from '../UserWorkoutComponents/WorkoutPlanComponent/WorkoutHomePlanSection'
import WorkoutInfoPlanSection from "../UserWorkoutComponents/WorkoutPlanComponent/WorkoutPlanInfoSection";
import Footer from '../../../../components/Footer'



function WorkoutPlanLanding(){
    return(
        <>
            <WorkoutHeader />
            <WorkoutHomePlanSection />
            <WorkoutInfoPlanSection />
            <Footer />
        </>
    )
}

export default WorkoutPlanLanding;