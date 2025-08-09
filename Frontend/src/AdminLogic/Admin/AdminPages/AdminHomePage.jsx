import '../AdminPages.css/AdminHomePage.css'
import HomeImg from '../AdminImg/AdminHomeImg.jpg'
function AdminHomePage({admin}){
    return(
        <div className="admin-home-page">
            <div className="admin-home-page-sections">
                <div className="admin-home-page-img">
                    <img src={HomeImg} alt="" />
                </div>

                <div className="admin-home-page-text">
                    <h3>Welcome, {admin?.userName}! 👋</h3>
                    <p>You’ve successfully logged into the admin dashboard.</p>
                    <p>From here, you can manage users, monitor system activity, and configure settings to suit your needs.</p>
                    <p>If you need help, visit the Settings section or contact technical support.</p>
                </div>
            </div>
        </div>
    )
}

export default AdminHomePage;