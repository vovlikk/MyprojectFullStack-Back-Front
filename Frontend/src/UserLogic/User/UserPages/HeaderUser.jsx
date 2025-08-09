import Logopng from '../../../Img/Logo/Logo.png';
import { Link } from 'react-router-dom';
import Support from '../UserLogic/Support';
import { useState, useRef, useEffect } from 'react';
import '../UserPagesCss/HeaderUser.css';
import UserProfile from './UserProfile';
import UserSubscription from './UserSubscription';



function HeaderUser({user,onClose}) {
  const[profilevisible,setProfileVisible] = useState(false);
  const [supportVisible, setSupportVisible] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const[showsubscription,setShowSubscription] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header-user-main">
      <div className="header-user-sections">
        <div className="header-logo">
          <img src={Logopng} alt="Logo" />
        </div>

        <div className="header-user-links">
          <Link to='/user/workouts'>Workouts</Link>
          <Link to='/user/workoutprogress'>Progress</Link>
          <button className='user-subscription-button' onClick={() => setShowSubscription(true)}>Subscription</button>
        </div>

        <div className="header-user-profile">
          <button onClick={() => setSupportVisible(true)}>Support</button>
          <button onClick={() => setProfileVisible(true)}>Profile</button>
          <Link to="/">
            <button>Exit</button>
          </Link>

          
        </div>
        {profilevisible && (
        <UserProfile user={user} onClose={() => setProfileVisible(false)} />
      )}

      
      {showsubscription && (
        <UserSubscription onClose={() => setShowSubscription(false)} />
      )}
        {supportVisible && (
          <Support onClose={() => setSupportVisible(false)} />
        )}
      </div>
      
    </header>
    
  );
}

export default HeaderUser;
