import { useState, useEffect } from "react";
import '../UserPagesCss/UserSubscription.css';
import icon from '../../../Img/Pricing/icon.png';
import { useApi } from "../../../Connect/ApiContext";

function UserSubscription({ onClose }) {
  const [message, setmessage] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  const [subscriptions, setsubscriptions] = useState([]); 
  const{apiUrl} = useApi();

  useEffect(() => {
    fetchUserSubscriptions();
  }, []);

  async function fetchUserSubscriptions() {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error("Authorization required");

      const res = await fetch(`${useApi}/api/subscribe/my-subscriptions`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!res.ok) throw new Error("Failed to load subscriptions");
      const data = await res.json();
      setsubscriptions(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  function isSubscribed(planId) {
    return subscriptions.some(sub => sub.subscriptionId === planId);
  }

  async function ChoiseSubscrpition(id) {
    setloading(true);
    seterror(null);
    setmessage(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("You need Authorization");
      }

      const response = await fetch(`${apiUrl}/api/subscribe/subscribe/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true"
        }
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText);
      }

      alert("Succesfull subscribe");

      const text = await response.text();
      setmessage(text);
      await fetchUserSubscriptions(); 

    } catch (err) {
      seterror(err.message);
    } finally {
      setloading(false);
    }
  }

  
  return (
    <div className="user-subscription-overlay" onClick={onClose}>
      <div className="user-subscription-section" onClick={(e) => e.stopPropagation()}>
        <div className="user-subscription-header">
          <h1>Our List Packages</h1>
        </div>

        <div className="user-subscription-cards">
          <div className="sub-card">
            <div className="sub-card-header">
              <h4>Basic Package</h4>
              <h1>$25</h1>
            </div>

            <div className="sub-card-body">
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Unlimited Gym Access</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>2x Fitness Consultant</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Nutrition Tracking</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>1x Free Suplement</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>3 Days per week</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Personal Trainer</h3>
              </div>
            </div>

            <div className="sub-card-btn">
              <button
                disabled={loading || isSubscribed(1)} 
                onClick={() => ChoiseSubscrpition(1)}
              >
                {isSubscribed(1) ? "Already Subscribed" : "Buy Now"} 
              </button>
            </div>
          </div>

          <div className="sub-card">
            <div className="sub-card-header">
              <h4>Mid Package</h4>
              <h1>$55</h1>
            </div>

            <div className="sub-card-body">
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Unlimited Gym Access</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>4x Fitness Consultant</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Nutrition Tracking</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>3x Free Suplement</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>5 Days per week</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Personal Trainer</h3>
              </div>
            </div>

            <div className="sub-card-btn">
              <button
                disabled={loading || isSubscribed(2)} 
                onClick={() => ChoiseSubscrpition(2)}
              >
                {isSubscribed(2) ? "Already Subscribed" : "Buy Now"}
              </button>
            </div>
          </div>

          <div className="sub-card">
            <div className="sub-card-header">
              <h4>Pro Package</h4>
              <h1>$75</h1>
            </div>

            <div className="sub-card-body">
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Unlimited Gym Access</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>7x Fitness Consultant</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Nutrition Tracking</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>5x Free Suplement</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Gym Card</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Personal Trainer</h3>
              </div>
            </div>

            <div className="sub-card-btn">
              <button
                disabled={loading || isSubscribed(3)} 
                onClick={() => ChoiseSubscrpition(3)}
              >
                {isSubscribed(3) ? "Already Subscribed" : "Buy Now"}
              </button>
            </div>
          </div>

          <div className="sub-card">
            <div className="sub-card-header">
              <h4>Athlete Package</h4>
              <h1>$105</h1>
            </div>

            <div className="sub-card-body">
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Unlimited Gym Access</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Free Clothes</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>All Training Program</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Free Fitness Consultant</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Free Suplement</h3>
              </div>
              <div className="sub-card-body-info">
                <img src={icon} alt="" />
                <h3>Gym Card</h3>
              </div>
            </div>

            <div className="sub-card-btn">
              <button
                disabled={loading || isSubscribed(4)} 
                onClick={() => ChoiseSubscrpition(4)}
              >
                {isSubscribed(4) ? "Already Subscribed" : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default UserSubscription;
