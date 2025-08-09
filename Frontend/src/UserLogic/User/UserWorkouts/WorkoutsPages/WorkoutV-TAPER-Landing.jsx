import WorkoutVtaperHome from "../UserWorkoutComponents/WorkoutV-taperComponent/WorkoutV-taperHome";
import WorkoutHeader from "./WorkoutHeader";
import WorkoutVtaperInfo from "../UserWorkoutComponents/WorkoutV-taperComponent/WorkoutV-taperInfo"
import Footer from '../../../../components/Footer'

function WorkoutVtaperLanding(){
    return(
        <>
            <WorkoutHeader />
            <WorkoutVtaperHome />
            <WorkoutVtaperInfo />
            <Footer />

        </>
    )
}

export default WorkoutVtaperLanding;