import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import logo from '../../../../Img/Logo/Logo.png'
import '../WorkoutsCss/WorkoutHeader.css'
import { useNavigate } from 'react-router-dom';


function WorkoutHeader(){

    const navigate = useNavigate();
   

    return(
        <header className="workout-header">
            <div className="workout-header-section">
                <div className="workout-header-logo">
                    <img src={logo} alt="" />
                </div>

                <div className="workout-header-links">
                    <Link to="/user/workoutplan">WORKOUT PLAN </Link>
                    <Link to="/user/workoutsets">SETS</Link>
                    <Link to="/user/workoutvform">BUILD A V-TAPER</Link>
                    <Link to="/user/workoutdance">DANCERS</Link>
                </div>

                <div className="workout-header-button">
                <Link to="/user/workouts">
                <button>Come Back</button>
                </Link>
                </div>
            </div>
        </header>
    )
}

export default WorkoutHeader;