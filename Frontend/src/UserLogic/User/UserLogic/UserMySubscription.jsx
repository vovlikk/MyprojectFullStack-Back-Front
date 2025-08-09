import { useEffect, useState } from "react";

import '../UserLogic.css/UseyMySubscription.css'
import { useApi } from "../../../Connect/ApiContext";
function MySubscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const{apiUrl} = useApi();

  useEffect(() => {
    async function fetchSubscriptions() {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Authorization required");

        const response = await fetch(`${apiUrl}/api/Subscribe/my-subscriptions`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true"
          }
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(text || "Failed to fetch subscriptions");
        }

        const data = await response.json();

        

        setSubscriptions(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscriptions();
  }, []);

  return (
    <div className="my-subscriptions-container">
      <h2>My Subscriptions</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="my-subscriptions-error">{error}</p>}

      {!loading && subscriptions.length === 0 && (
        <p>You don’t have any subscriptions yet.</p>
      )}

      <ul className="my-subscriptions-list">
        {subscriptions.map((sub) => {
          const plan = sub.subscribePlan;

          return (
            <li  key={sub.id} className="my-subscription-card">
                <h3>ID: {sub.id}</h3>
              <h3>{plan?.name ?? "Unnamed Plan"}</h3>
              <p>Price: ${plan?.price ?? "N/A"}</p>
              <p>Features: {plan?.description ?? "No description available"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MySubscriptions;
