import '../StylesCss/Transform.css';
import Icon from '../Img/Transform/icon.png'
import MainImg from '../Img/Transform/main-photo.png'
import Register from '../BusinnesLogic/Authentication/RegisterUser';
import '../BusinnesLogic/BusinnesCss/Register.css';
import { useState } from 'react';

function Transform(){
      const [showRegister, setShowRegister] = useState(false);
    return(
    <div className='Transoform-Main'>
        <div className='Transform-Sections'>
        <div className='Transoform-Img'>
        <img src={MainImg} alt="" />
        </div>

        <div className='Transoform-Info'>
        <div className='transofm-info-text'>
        <h1>Transform your<br/> physique with our <br/> fitness plan.</h1>
        </div>

        <div className='transform-info-task'>

            <div className='trasform-tasks'>
                <img src={Icon} alt="" />
                <h4>Increase Muscle and Strength</h4>
            </div>

            <div className='trasform-tasks'>
                <img src={Icon} alt="" />
                <h4>Be Healthier than before</h4>
            </div>

            <div className='trasform-tasks'>
                <img src={Icon} alt="" />
                <h4>Increase Stamina</h4>
            </div>
        </div>

        <div className='transform-Info-buttons'> 
        <button onClick={() => setShowRegister(true)} className='Join-now-button'>Join now</button>
        <button className='Contact-Us'>Contact us</button>
         {showRegister && (
          <Register onClose={() => setShowRegister(false)} />
          )}
        </div>
        </div>
        </div>
    </div>
    )
}

export default Transform;