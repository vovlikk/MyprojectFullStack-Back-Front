
import Home from '../components/HomeSection';
import Header from '../components/Header';
import ProgramSection from '../components/ProgramSection'
import Transform  from '../components/TransformSection';
import LifeStyle from '../components/LifeStyleSection';
import Price from '../components/PricesSection';
import AboutUs from '../components/AboutUsSection'
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

import AdminDashboard from '../BusinnesLogic/DashBoards/AdminDashboard';
import UserDashboard from '../BusinnesLogic/DashBoards/UserDashboard';

function LandingPage(){
    return(
        <div>
            <Header />
            <Home />
            <ProgramSection />
            <Transform />
            <LifeStyle />
            <Price />
            <AboutUs />
            <Subscribe />
            <Footer />
          
        </div>
    )
}

export default LandingPage;