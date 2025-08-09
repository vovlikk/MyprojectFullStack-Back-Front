import '../WorkoutsCss/Sets/WorkoutSetsHome.css'
import WorkoutHeader from './WorkoutHeader';
import WorkoutSetsHome from '../UserWorkoutComponents/WorkoutSetsComponent/WorkoutSetsHome'
import WorkoutSetsInfo from '../UserWorkoutComponents/WorkoutSetsComponent/WorkoutSetsInfo';
import Footer from '../../../../components/Footer'




function WorkoutSets (){
    return(
        <>
            <WorkoutHeader />
            <WorkoutSetsHome />
            <WorkoutSetsInfo />

            <Footer />
        </>
    )
}

export default WorkoutSets;