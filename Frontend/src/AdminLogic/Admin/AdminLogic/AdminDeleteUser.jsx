import { useState } from "react";
import '../AdminLogic.css/AdminDeleteUser.css'
import { useApi } from "../../../Connect/ApiContext";

function AdminDeleteUsers() {
    const [deleteUser, setDeleteEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const{apiUrl} = useApi();

    async function handleDelete() {
        setLoading(true);
        setError(null);

        const info = { UserName: deleteUser };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("You need authorization");
            }

            const response = await fetch(`${apiUrl}/api/Admin/delete-user`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(info)
            });

            if (!response.ok) {
                throw new Error("Failed to delete user");
            }

            alert("User deleted successfully!");
            setDeleteEmail('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
         <div className="delete-user-container">
      <div className="delete-user-title">
        <h3>Delete User</h3>
      </div>
      <form className="delete-user-form" onSubmit={handleDelete}>
        <input
          type="text"
          className="delete-user-input"
          placeholder="Enter UserName"
          value={deleteUser}
          onChange={e => setDeleteEmail(e.target.value)}
          required
        />
        <button className="delete-user-button" type="submit" disabled={loading}>
          {loading ? 'Deleting...' : 'Delete User'}
        </button>
      </form>
      {error && <div className="delete-user-error">{error}</div>}
    </div>
    );
}

export default AdminDeleteUsers;
