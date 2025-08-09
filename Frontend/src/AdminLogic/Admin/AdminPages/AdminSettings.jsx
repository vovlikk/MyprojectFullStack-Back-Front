import { useState } from "react";
import '../AdminPages.css/AdminSettings.css'
import AdminAddRole from '../AdminLogic/AdminAddRole'
import AdminAdmin from '../AdminLogic/AdminAdmin'
import AdminChangeEmail from '../AdminLogic/AdminChangeEmail'
import AdminChangePassword from '../AdminLogic/AdminChangePassword'
import AdminSupport from '../AdminLogic/AdminSupport'
import AdminUsers from '../AdminLogic/AdminUsers'
import AdminReviews from '../AdminLogic/AdminReviews'
import AdminDeleteUser from '../AdminLogic/AdminDeleteUser'
import AdminDeleteSupportSms from "../AdminLogic/AdminDeleteSupportSms";


function AdminSettings({onClose}) {
  const [choise, setclick] = useState('admin-add-role');

  return (
    <div className="admin-settings-overlay"  onClick={onClose} >
      <div className="admin-settings-body" onClick={e => e.stopPropagation()}>
        <div className="admin-settings-buttons">
          <button onClick={() => setclick('admin-add-role')}>Add Role</button>
          <button onClick={() => setclick('admin-role-admin')}>Give Role Admin</button>
          <button onClick={() => setclick('admin-change-email')}>Change Email</button>
          <button onClick={() => setclick('admin-change-password')}>Change Password</button>
          <button onClick={() => setclick('admin-delete-user')}>Delete User</button>
          <button onClick={() => setclick('admin-check-reviews')}>Check Review</button>
          <button onClick={() => setclick('admin-check-support')}>Check Support</button>
          <button onClick={() => setclick('admin-delete-sup')}>Delete Sms Support</button>
          <button onClick={() => setclick('admin-check-allusers')}>Get All Users</button>
        </div>

        <div className="admin-content" >
          {choise === 'admin-add-role' && (
            <div className="admin-add-role">
              <AdminAddRole />
            </div>
          )}

          {choise === 'admin-role-admin' && (
            <div className="admin-role-admin">
              <AdminAdmin />
            </div>
          )}

          {choise === 'admin-change-email' && (
            <div className="admin-change-email">
              <AdminChangeEmail />
            </div>
          )}

          {choise === 'admin-change-password' && (
            <div className="admin-change-password">
              <AdminChangePassword />
            </div>
          )}

          {choise === 'admin-delete-user' && (
            <div className="admin-delete-user">
              <AdminDeleteUser />
            </div>
          )}

          {choise === 'admin-check-reviews' && (
            <div className="admin-check-reviews">
              <AdminReviews />
            </div>
          )}

          {choise === 'admin-check-support' && (
            <div className="admin-check-support">
              <AdminSupport />
            </div>
          )}
           {choise === 'admin-delete-sup' && (
            <div className="admin-delete-sup">
              <AdminDeleteSupportSms />
            </div>
          )}

          {choise === 'admin-check-allusers' && (
            <div className="admin-check-allusers">
              <AdminUsers />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
