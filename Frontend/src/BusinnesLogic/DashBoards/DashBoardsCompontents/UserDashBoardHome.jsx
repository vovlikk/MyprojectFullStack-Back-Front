import { useState } from "react";
import '../DashBoardComponentCss/UserBoardHome.css'
import img from '../DashBoardImg/gymseason.jpg'


function UserDashboardHome({user}){
    return(
        <div className="user-dash-board-home-container">
            <div className="user-dash-board-home-section">
                <div className="user-dash-board-img">
                    <img src={img} alt="" />
                </div>

                <div className="user-dash-board-text">
                    <h3>Welcome, {user?.userName}! 👋</h3>
                    <p>We’re glad to see you back.</p>
                    <p>From your dashboard, you can view your profile, track your activity, and access personalized features.</p>
                    <p>If you have any questions or need help, feel free to contact our support team.</p>
                </div>
            </div>
        </div>
    )
}

export default UserDashboardHome;