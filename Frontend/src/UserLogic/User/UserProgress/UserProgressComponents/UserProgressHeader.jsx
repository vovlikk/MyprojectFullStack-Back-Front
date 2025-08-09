import { useState } from 'react';
import Logo from '../../../../Img/Logo/Logo.png';
import '../UserProgress.css/UserProgressHeader.css'
import UserProgressCalendar from './UserProgressCalendar';
import UserProgressGrafics from './UserProgressGrafics';
import UserProgressNotes from './UserProgressNotes';
import { Link } from 'react-router-dom';

function UserProgressHeader({onClose}){

    const[openpagecalendar,setOpenPageCalendar] = useState(false);
    const[openpagegrafic,setOpenPageGrafic] = useState(false);
    const[openpagenotes,setOpenPageNotes] = useState(false);

    return(
       
       <header className='user-progress-header'>
        <div className='user-progress-header-section'>
            <div className='user-progress-header-logo'>
                <img src={Logo} alt="" />
            </div>

            <div className='user-progress-header-buttons'>
                
                <button onClick={() => setOpenPageGrafic(true)} >Grafics</button>
                <button onClick={() => setOpenPageNotes(true)}>Notes</button>
            </div>

            <div className='user-progress-header-button-home'>
               <Link to="/user">
                    <button>Home</button>
                </Link>
            </div>
        </div>

       
        {openpagegrafic &&(
            <UserProgressGrafics onClose={() => setOpenPageGrafic(false)} />
        )}

        {openpagenotes && (
            <UserProgressNotes onClose={() =>setOpenPageNotes(false)} />
        )}
       </header>
       
    )
}

export default UserProgressHeader;