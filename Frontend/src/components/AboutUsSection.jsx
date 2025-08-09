import '../StylesCss/AboutUs.css';
import { Element } from 'react-scroll';
import Icons from '../Img/Home/Icons.png'
import Stars from '../Img/AboutUs/stars.png'
import Man from '../Img/AboutUs/man.png'

function About(){
    return(
    <Element name="community">
    <div className='aboutus-main'>
        <div className='abotus-sections'>
        <div className='aboutus-left-side'>
        <h1>What Our Member <br /> Say About Us?</h1>
        <div className='icon-left-side'>
        <img src={Icons} alt="" />
        <h3>10K+ Satisfied Customer</h3>
        </div>
        </div>

        <div  className='aboutus-right-side'>
            <div className='stars-img'>
                <img src={Stars} alt="" />
            </div>
            <div className='text'>
            <h2>“ Join this fitness member, the best choice that I’ve. They’re <br />very professional and give you suggestion about what food <br /> and nutrition that you can eat”</h2>
            </div>
            <div className='man-info'>
            <div className='img-man'>
                <img src={Man} alt="" />
            </div>
            <div className='text-man'>
                <h2>Jonathan Edward</h2>
                <p>Office Worker</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </Element>
    )
}


export default About;