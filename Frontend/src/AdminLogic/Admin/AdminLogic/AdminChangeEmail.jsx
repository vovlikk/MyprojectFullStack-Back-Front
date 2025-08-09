import { useState } from "react";
import '../AdminLogic.css/AdminChangeEmail.css'
import { useApi } from '../../../Connect/ApiContext';

function AdminChangeEmail() {
    const [oldEmail, setOldEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { apiUrl } = useApi();

    async function handlechangeEmailAdmin(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const info = {
            CurrentEmail: oldEmail,
            NewEmail: newEmail
        };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("You need authorization!");
            }

            const response = await fetch(`${apiUrl}/api/Admin/admin-change-email`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    "ngrok-skip-browser-warning": "true"
                },
                body: JSON.stringify(info)
            });

            if (!response.ok) {
                throw new Error("Failed to change email");
            }

            alert("Email was successfully changed!");
            setOldEmail('');
            setNewEmail('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
       <div className="change-email-container">
        <div className="change-email-title">
            <h3>Change Email</h3>
        </div>
     <form className="change-email-form" onSubmit={handlechangeEmailAdmin}>
        <input
        type="email"
        className="change-email-input"
        placeholder="Enter current email"
        value={oldEmail}
        onChange={e => setOldEmail(e.target.value)}
        required
        />
        <input
        type="email"
        className="change-email-input"
        placeholder="Enter new email"
        value={newEmail}
        onChange={e => setNewEmail(e.target.value)}
        required
        />
        <button className="change-email-button" type="submit" disabled={loading}>
        {loading ? "Changing..." : "Change Email"}
        </button>
    </form>
    {error && <div className="change-email-error">{error}</div>}
    </div>
    );
}

export default AdminChangeEmail;
