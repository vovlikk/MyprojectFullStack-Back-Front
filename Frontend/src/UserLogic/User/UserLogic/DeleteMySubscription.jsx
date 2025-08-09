import { useState } from "react";
import '../UserLogic.css/UserDeleteSubscription.css'
import { useApi } from "../../../Connect/ApiContext";

function RemoveSubscription() {
  const [choiseid, setChouseid] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const{apiUrl} = useApi();
  async function DeleteSub(e) {
    e.preventDefault(); 

    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("You need to be authorized");
      }

      const response = await fetch(`${apiUrl}/api/Subscribe/unsubscribe/${choiseid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true"
        }
      });

      if (!response.ok) {
        const text = await response.text(); 
        throw new Error(text || "Failed to delete subscription");
      }

      alert("Subscription was deleted");
      setChouseid(''); 

    } catch (err) {
      setError("Fail to delete: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="delete-subscription-container">
        <form onSubmit={DeleteSub} className="delete-subscription-form">
            <input
            className="delete-subscription-input"
            value={choiseid}
            onChange={e => setChouseid(e.target.value)} 
            placeholder="Enter subscription ID"
            />
            <button
            type="submit"
            disabled={loading}
            className="delete-subscription-button"
            >
            {loading ? "Deleting..." : "Delete"}
            </button>
        </form>
        {error && <p className="delete-subscription-error">{error}</p>}
</div>
  );
}

export default RemoveSubscription;
