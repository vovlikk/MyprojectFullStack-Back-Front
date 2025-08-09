import '../StylesCss/Footer.css';
import Logopng from '../Img/Logo/Logo.png'
import instagram from '../Img/Footer/instagram.png'
import facebook from '../Img/Footer/facebook.png'
import twitter from '../Img/Footer/twitter.png'
import Icon from '../Img/Company/icon.png'
function Footer(){
    return(
        <div className="footer-main">
            <div className='footer-sections'>

            <div className='footer-left-side'>

            <div className='footer-logo'>
            <img src={Logopng} alt="" />
            <h2>Gym Center</h2>
            </div>

            <div className='footer-left-text'>
            <h3>Highlight benefits of each <br /> exercise, both physical and <br /> mental</h3>
            </div>

            </div>

            <div className='footer-right-side'>
            <div className='footer-cards'>

            <div className='card-footer'>
            <h1>Sitemap</h1>
            <h2>About</h2>
            <h2>Promos</h2>
            <h2>News & Blog</h2>
            <h2>Help Center</h2>
            </div>

            <div className='card-footer'>
            <h1>Support</h1>
            <h2>FAQ</h2>
            <h2>Support</h2>
            </div>

            <div className='card-footer'>
            <div className='card-footer-title'>
             <h1>Social Media</h1>
            </div>
            <div className='card-footer-img'>
            <img src={instagram} alt="" />
            <img src={twitter}alt="" />
            <img src={facebook} alt="" />
            </div>
            </div>
          
            </div>
            </div>
            
            </div>


            <div className="company-divider" /> 
            <div className="Company-main">
                <div className="company-section">

                    <div className="company-left-side">
                        <img src={Icon} alt="" />
                        <h2>2025 Fitness Center</h2>
                    </div>

                    <div className="company-right-side">
                        <h1>Term of Use</h1>
                        <h1>Privacy Policy</h1>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer;