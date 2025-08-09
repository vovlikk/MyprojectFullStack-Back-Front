import { useState } from "react";
import { Link } from "react-scroll";
import Logopng from '../Img/Logo/Logo.png';
import '../StylesCss/Header.css';
import Register from '../BusinnesLogic/Authentication/RegisterUser';
import Login from "../BusinnesLogic/Authentication/LoginUser";

function Header() {
  const [showRegister, setShowRegister] = useState(false);
  const[showLogin,setShowLogin] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={Logopng} alt="Logo" className="logo" />
        </div>

        <div className="header-right">
          <nav className="nav-links">
            <Link to="home" smooth={true} duration={500}>Home</Link>
            <Link to="program" smooth={true} duration={2000}>Program</Link>
            <Link to="price" smooth={true} duration={2000} offset={-100}>Pricing</Link>
            <Link to="community" smooth={true} duration={2000}>Community</Link>
            
          </nav>

          <div className="auth-buttons">
            <button onClick={() => setShowLogin(true)} className="login-btn">Login</button>
            <button onClick={() => setShowRegister(true)} className="register-btn">Register</button>
          </div>
        </div>
      {showRegister && (
        <Register onClose={() => setShowRegister(false)} />
      )}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}
      </header>

    </>
  );
}

export default Header;
