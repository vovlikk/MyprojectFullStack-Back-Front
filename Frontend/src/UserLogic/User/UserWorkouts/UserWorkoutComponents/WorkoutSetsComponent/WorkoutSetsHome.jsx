import '../../WorkoutsCss/Sets/WorkoutSetsHome.css'
import ImgHome from '../../UserWorkoutsImg/Sets/sets-home-img.jpg'
function WorkoutSetsHome(){
    return(
        <div className="sets-home-container">
            <div className="sets-home-sections">

            <div className="sets-home-img">
            <img src={ImgHome} alt="" />
            </div>

            <div className="sets-home-text">
                <h2>HOW MANY SETS AND <br /> REPS  SHOULD YOU DO?<br /> A GUIDE TO BUILDING <br /> MUSCLE, STRENGTH, AND MORE</h2>
            </div>

            </div>
        </div>
    )
}

export default WorkoutSetsHome;