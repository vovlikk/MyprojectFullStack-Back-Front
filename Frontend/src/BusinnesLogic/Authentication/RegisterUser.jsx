import { useState , useEffect} from "react";
import '../BusinnesCss/Register.css';

import {useLockBodyScroll} from '../../Hooks/useLockBodyScroll'
import { useApi } from "../../Connect/ApiContext";


function Register({ onClose }) {
  useLockBodyScroll();
  const[email,setEmail] = useState('')
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const{apiUrl} = useApi();

  


  async function HandleSubmit(e) {
    e.preventDefault();
    setError(null);
    setloading(true);

    const user = { Email: email, UserName: username, Password: password };



    try {
      const response = await fetch(`${apiUrl}/api/values/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        credentials:'include'
      });

      if (!response.ok) {
        const responserror = await response.json().catch(() => null);
        alert(responserror?.status || "Email or UserName already register");
        return;
      }

      alert('Register Successful'); 
      onClose();
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setloading(false);
    }
  }

  return (
   <div className="register-overlay" onClick={onClose}>
  <div className="register-form" onClick={e => e.stopPropagation()}>

    
    <div className="register-header">
      <button className="close-btn" onClick={onClose}>✖</button>
      <h1 className="register-title">Gym Center</h1>
    </div>

   
    <div className="register-body">

        <input
        className="input-email"
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Email"
      />

      <input
        className="input-username"
        onChange={e => setUserName(e.target.value)}
        value={username}
        type="text"
        placeholder="Enter Username"
      />
      <input
        className="input-password"
        onChange={e => setPassword(e.target.value)} 
        value={password}
        type="password"
        placeholder="Enter Password"
      />
    </div>

    {/* Кнопка регистрации */}
    <div className="register-actions">
      <button
        type="submit"
        className="register-button-btn"
        onClick={HandleSubmit}
        disabled={loading}
      >
        Register
      </button>
    </div>

    {/* Ошибка и индикатор загрузки */}
    <div className="register-feedback">
      {error && <div className="error-message">{error}</div>}
      {loading && <div className="loading-message">Loading...</div>}
    </div>

    {/* Правовая информация */}
    <div className="register-privacy">
      <h2>
        By clicking “Create Account” you agree to our <br />
        terms and privacy policy.
      </h2>
    </div>
    
  </div>
</div>

  );
}

export default Register;
