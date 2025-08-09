import React, { useState } from "react";
import "../UserPagesCss/Support.css";
import { useApi } from "../../../Connect/ApiContext";

function Support({ onClose }) {
  const[name,setName] = useState('');
  const [description, setDescrip] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const{apiUrl} = useApi();

  async function HandlerMessage() {
    setloading(true);
    seterror(null);
    const sms = {UserName:name,  Description: description };

    try {
      const token = localStorage.getItem('token');
      if(!token){
        throw new Error('you need authorize');
      }
      const response = await fetch(`${apiUrl}/api/User/submit-message-tosupport`, {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
          Authorization:`Bearer ${token}`,  

        },
        
        body: JSON.stringify(sms),
      });

      if (!response.ok) {
        const responseError = await response.json().catch(() => null);
        throw new Error(responseError?.status || "Failed to send");
      }

      alert("Successful");
    } catch (err) {
      seterror(err.message || "Fail to send");
    } finally {
      setloading(false);
      setDescrip("");
      
    }
  }

  return (
    <div className="support-overlay" onClick={onClose}>
      <div className="support-form" onClick={(e) => e.stopPropagation()}>
        <div className="support-header">
          
        </div>

        <div className="support-body">
          <input type="" 
            value={name}
            placeholder="enter your UserName"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-description"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescrip(e.target.value)}
          />
        </div>

        <button className="support-button-btn" onClick={HandlerMessage}>
          Send
        </button>

        {loading && <div>Loading...</div>}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
}

export default Support;
