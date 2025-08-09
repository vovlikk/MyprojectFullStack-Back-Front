import { useState } from "react";
import "../UserLogic.css/UserChangePassword.css";
import { useApi } from "../../../Connect/ApiContext";

function UserChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { apiUrl } = useApi();

  async function handlerChangeUserPassword(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    
    if (!currentPassword || !newPassword) {
      setError("Both current and new password are required.");
      setLoading(false);
      return;
    }
    if (currentPassword === newPassword) {
      setError("New password must be different from current password.");
      setLoading(false);
      return;
    }

     if (newPassword.length < 8) {
    setError("New password must be at least 8 characters long.");
    setLoading(false);
    return;
  }

  if (!/[A-Z]/.test(newPassword)) {
    setError("New password must contain at least one uppercase letter.");
    setLoading(false);
    return;
  }

    const info = {
      CurrentlyPassword: currentPassword,
      NewPassword: newPassword,
    };

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("You need to authorize");
      }

      const response = await fetch(`${apiUrl}/api/User/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(info),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData?.message || errorData?.Message || "Failed to change password"
        );
      }

      alert("Password was successfully changed");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="change-password-form" onSubmit={handlerChangeUserPassword}>
      <div className="form-group">
        <input
          type="password"
          className="form-input"
          placeholder="Enter Your Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-input"
          placeholder="Enter Your New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <button className="submit-button" type="submit" disabled={loading}>
        {loading ? "Changing..." : "Change Password"}
      </button>

      {error && <div className="error-message">{error}</div>}
    </form>
  );
}

export default UserChangePassword;
