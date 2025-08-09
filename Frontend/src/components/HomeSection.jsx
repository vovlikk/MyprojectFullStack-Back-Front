import { Element } from 'react-scroll';
import { useState } from 'react';
import '../StylesCss/Home.css';
import HomeBigLogo from '../Img/Home/Home-Man-Woman.png';
import Icons from '../Img/Home/Icons.png';
import Register from '../BusinnesLogic/Authentication/RegisterUser';


function Home() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Element name="home"> 
      <div className="Home">
        <div className="Home-Left-Side">
          <div className="Home-text">
            <h1>Helps for your <br /> ideal body fitness</h1>
            <p>
              Motivate users with benefits and positive reinforcement,<br />
              and offer modifications and progress tracking.
            </p>
          </div>
          <button onClick={() => setShowRegister(true)} className='Home-button'>Start Training</button>

          {showRegister && (
          <Register onClose={() => setShowRegister(false)} />
          )}

        </div>

        <div className="Home-Right-Side">
          <div className='Home-Right-Side-Text'>
            <h1>Fitness</h1>
          </div>

          <div className='Home-Right-Side-Img'>
            <div className='home-right-main-photo'>
              <img src={HomeBigLogo} alt="Home Banner" />
            </div>
          </div>

          <div className='icons'>
            <div className='icons-info'>
              <img src={Icons} alt="Customer Satisfaction" />
              <h3>10K+ Satisfied Customer</h3>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Home;
