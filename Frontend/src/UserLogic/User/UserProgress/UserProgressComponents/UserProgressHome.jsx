import UserProgressHomeImg from '../../../UserImg/ userprogresshome.jpg'
import '../UserProgress.css/UserProgressHome.css'
function UserProgressHome(){
    return( 
        <div className="user-progress-home-container">
            <div className="user-progress-home-section">
                <div className="user-progress-home-img">
                    <img src={UserProgressHomeImg} alt="" />
                </div>

                <div className="user-progress-home-text">
                    
                <p>Here’s your progress so far:</p>
                <p>You’re doing great! Keep up the good work and stay consistent to reach your goals.</p>
                <p>Check your recent activity, completed tasks, and what's coming up next.</p>
                <p>Remember: small steps lead to big results!</p>
                </div>
            </div>
        </div>
    )
}

export default UserProgressHome;