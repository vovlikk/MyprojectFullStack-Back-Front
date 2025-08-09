import '../StylesCss/ProgramSection.css';
import { Element } from 'react-scroll';
import Cardio from '../Img/Program/cardio.png'
import Fat from  '../Img/Program/fat.png'
import Food from '../Img/Program/food.png'
import Muscle from  '../Img/Program/muscle.png'
function ProgramSection(){
    return(
        <Element name="program"> 
        <div className='section-program'>
            <div className='section-program-header'>

            <div className='section-program-text-header'>
                <h1>Explore Our Program</h1>
            </div>
            </div>

            <div className='section-program-footer'>

            <div className='section-program-cards'>
               
                <div className='card'>
                    <img src={Cardio} alt="" />
                    <h3>Cardio Strength</h3>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Ut<br/> venenatis, nunc a pretium viverra.</p>
                </div>
                <div className='card'>
                    <img src={Fat} alt="" />
                    <h3>Fat Lose</h3>
                     <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Ut<br/> venenatis, nunc a pretium viverra.</p>
                </div>
                <div className='card'>
                    <img src={Muscle} alt="" />
                    <h3>Muscle Gain</h3>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Ut<br/> venenatis, nunc a pretium viverra.</p>
                </div>
                <div className='card'>
                    <img src={Food} alt="" />
                    <h3>Muscle Gain</h3>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Ut<br/> venenatis, nunc a pretium viverra.</p>
                </div>
            </div>

            </div>

        </div>
        </Element>
    )
}

export default ProgramSection;