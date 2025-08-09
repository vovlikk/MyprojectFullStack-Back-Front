import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import '../BusinnesCss/Login.css';
import { useApi } from "../../Connect/ApiContext";

import { useLockBodyScroll } from "../../Hooks/useLockBodyScroll";

function Login({ onClose }) {
  const [logUserName, setLogUserName] = useState('');
  const [logPassword, setLogPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const{apiUrl} = useApi();
  const navigate = useNavigate();
  useLockBodyScroll();

  async function HandlerLogin(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const userLogin = { UserName: logUserName, Password: logPassword };

    try {
      const response = await fetch(`${apiUrl}/api/values/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },  
        "ngrok-skip-browser-warning": "true",
        body: JSON.stringify(userLogin),
      });

      if (!response.ok) {
        const resperror = await response.json().catch(() => null);
        throw new Error(resperror?.Message || "Fail Login");
      }

      const data = await response.json();

      localStorage.setItem('token', data.token);

      const decoded = jwtDecode(data.token);

      const roles =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
        decoded["role"] || [];

      const rolesArray = typeof roles === 'string' ? [roles] : roles;

      if (rolesArray.includes("Admin")) {
        navigate('/admin');
      } else {
        navigate('/user');
      }

      setLogPassword('');
      setLogUserName('');
      alert('Login Successful');

    } catch (err) {
      setError(err.message || "Fail Login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-overlay" onClick={onClose}>
      <form className="login-form" onClick={e => e.stopPropagation()} onSubmit={HandlerLogin}>
        <div className="login-header">
          <button type="button" className="close-btn" onClick={onClose}>✖</button>
          <h1 className="login-title">Gym Center</h1>
        </div>

        <div className="login-body">
          <input
            className="input-username"
            onChange={e => setLogUserName(e.target.value)}
            value={logUserName}
            type="text"
            placeholder="Enter Username"
            required
          />
          <input
            className="input-password"
            onChange={e => setLogPassword(e.target.value)}
            value={logPassword}
            type="password"
            placeholder="Enter Password"
            required
          />
        </div>

        <div className="login-actions">
          <button
            type="submit"
            className="register-button-btn"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </div>

        <div className="login-feedback">
          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="login-privacy">
          <h2>
            By clicking “Login” you agree to our <br />
            terms and privacy policy.
          </h2>
        </div>
      </form>
    </div>
  );
}

export default Login;
