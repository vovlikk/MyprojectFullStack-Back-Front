import '../../WorkoutsCss/Dance/WorkoutDanceHome.css'
import DanceImg from '../../UserWorkoutsImg/Dance/workout-dance.jpg'

function WorkoutDanceHome(){
    return(
        <div className='workout-home-dance-container'>
            <div className='workout-home-dance-section'>
                <div className='workout-home-dance-img'>
                    <img src={DanceImg} alt="" />
                </div>

                <div className='workout-home-dance-text'>
                    <h2>THE BEST GYM WORKOUT PLAN FOR DANCERS</h2>
                </div>
            </div>
        </div>
    )
}

export default WorkoutDanceHome;