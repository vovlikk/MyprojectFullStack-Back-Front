import '../AdminPages.css/AdminHeader.css'
import logo from '../../../Img/Logo/Logo.png'
import { useEffect, useState } from 'react';
import AdminSettings from './AdminSettings';
import AdminHomePage from './AdminHomePage';
import { Link } from 'react-router-dom';



function AdminHeader({ admin ,}) {
  
  const [showsettings, setsettings] = useState(false);

  
  

  return (
    <>
      <header className='admin-header'>
        <div className='header-admin-section'>
          <div className='admin-header-logo'>
            <img src={logo} alt="Logo" />
          </div>

          <div className='admin-buttons'>
            <div className='admin-btn-settings'>
              <button onClick={() => setsettings(true)}>Open settings</button>
            </div>
            <div className='admin-btn-exit'>
              <Link to="/">
              <button>Exit</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

    
      {showsettings && (
        <AdminSettings onClose={() => setsettings(false)} />
      )}

      <AdminHomePage admin={admin} />
    </>
  );
}

export default AdminHeader;
