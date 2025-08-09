import { useState } from "react";
import '../UserLogic.css/UserChangeEmail.css'
import { useApi } from "../../../Connect/ApiContext";

function UserChangeName(){
    
    const[password,setPassword] = useState('');
    const[newemail,setNewEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const{apiUrl} = useApi();

    async function handlerChangeEmail(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const info = {Password:password,NewEmail:newemail};

        try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('You need to authorize');
      }

        if (!password || !newemail) {
        setError("All fields are required");
        setLoading(false);
        return;
        }

      const response = await fetch(`${apiUrl}/api/User/change-email`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(info)
      });

      if (!response.ok) {
        throw new Error('Failed to change email');
      }

      alert("Email was successfully changed");
      
      setPassword('');
      setNewEmail('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
}
return(
   <form className="email-update-form" onSubmit={handlerChangeEmail}>
  


  <div className="email-update-field">
    <input
      type="email"
      className="email-input-new"
      placeholder="Enter New Email"
      value={newemail}
      onChange={e => setNewEmail(e.target.value)}
    />
  </div>

  <div className="email-update-field">
    <input
      type="password"
      className="email-input-password"
      placeholder="Enter Your Password"
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
  </div>

  <button className="email-submit-button" type="submit" disabled={loading}>
    {loading ? 'Changing...' : 'Change Email'}
  </button>

  {error && <div className="email-error-text">{error}</div>}
</form>

)
} 

export default UserChangeName;