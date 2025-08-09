import '../StylesCss/Price.css';
import { Element } from 'react-scroll';
import Icon from '../Img/Pricing/icon.png';
import { useState } from 'react';


function Price() {
  return (
    <Element name="price">
    <div className="price-main">
      <div className="price-sections">

        <div className="price-text-up">
          <h3>Pricing</h3>
          <h1>Our List Packages</h1>
          <div className='price-text-buttoms'>
            <div className='biller-montly'>
            <button>Billed Montly</button>
            </div>
            <div className='billed-yearly'>
            <button>Billed Yearly</button>
            </div>
          </div>
        </div>

        <div className="cards-price">
          {/* Basic Package */}
          <div className="cards">
            <h5>Basic Package</h5>
            <h1>$25</h1>
            <p>per month, bill annually</p>
            <div className="text-colums">
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Unlimited Gym Access</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>2x Fitness Consultant</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Nutrition Tracking</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>1x Free Supplement</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>3 Days per week</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Personal Trainer</h2>
              </div>
            </div>
             <button className='register-button'>Register Now</button>
          </div>

          {/* Mid Package */}
          <div className="cards">
            <h5>Mid Package</h5>
            <h1>$55</h1>
            <p>per month, bill annually</p>
            <div className="text-colums">
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Unlimited Gym Access</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>2x Fitness Consultant</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Nutrition Tracking</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>1x Free Supplement</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>3 Days per week</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Personal Trainer</h2>
              </div>

            </div>
             <button className='register-button'>Register Now</button>
          </div>

          {/* Pro Package */}
          <div className="cards">
            <h5>Pro Package</h5>
            <h1>$75</h1>
            <p>per month, bill annually</p>
            <div className="text-colums">
             <div className="text">
                <img src={Icon} alt="" />
                <h2>Unlimited Gym Access</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>7x Fitness Consultant</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Nutrition Tracking</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>5x Free Suplement</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Gym Card</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Personal Trainer</h2>
              </div>
            </div>
           <button className='register-button'>Register Now</button>
          </div>

          {/* Athlete Package */}
          <div className="cards">
            <h5>Athlete Package</h5>
            <h1>$105</h1>
            <p>per month, bill annually</p>
            <div className="text-colums">
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Unlimited Gym Access</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Free Clothes</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>All Training Program</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Free Fitness Consultant</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Free Suplement</h2>
              </div>
              <div className="text">
                <img src={Icon} alt="" />
                <h2>Gym Card</h2>
              </div>
            </div>
            <button className='register-button'>Register Now</button>
          </div>

        </div>
      </div>
    </div>
    </Element>
  );
}

export default Price;
