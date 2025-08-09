import { useState } from "react";
import UserChangePassword from "../UserLogic/UserChangePassword";
import UserChangeEmail from "../UserLogic/UserChangeEmail";
import AddNumberUser from "../UserLogic/AddNumberPhone";
import '../UserPagesCss/UserSettings.css';
import UserReview from '../UserLogic/UserReview'
import ChangeUserNumber from '../UserLogic/UserChangeNumber'
import DeleteMySubscription from '../UserLogic/DeleteMySubscription'
import MySubscriptions from "../UserLogic/UserMySubscription";


function UserSettings() {
  const [choise, setchoise] = useState('change-password');

  return (
    <div className="user-settings">
      <div className="settings-buttons">
        <button onClick={() => setchoise('change-password')}>Change Password</button>
        <button onClick={() => setchoise('change-email')}>Change Email</button>
        <button onClick={() => setchoise('add-number')}>Add Phone Number</button>
        <button onClick={() => setchoise('change-number')}>Change Number</button>
        <button onClick={() => setchoise('send-review')}>Send Review</button>
        <button onClick={() => setchoise('delete-subscription')}>Delete Subscription</button>
        <button onClick={() =>setchoise('my-sub')}>My Subscription</button>

      </div>

      <div className="settings-tabs">
        {choise === 'change-password' && (
          <div className="settings-change-password">
            <UserChangePassword />
          </div>
        )}

        {choise === 'change-email' && (
          <div className="settings-change-email">
            <UserChangeEmail />
          </div>
        )}

        {choise === 'add-number' && (
          <div className="add-number-user">
            <AddNumberUser />
          </div>
        )}

        {choise === 'send-review' && (
            <div className="settings-send-review">
                <UserReview />
            </div>
        )}
        {choise === 'change-number' && (
            <div className="settings-change-number">
                <ChangeUserNumber />
            </div>
        )}

        {choise === 'delete-subscription' &&(
          <div className="settings-delete-subscription">
            <DeleteMySubscription />
          </div>
        )}

        {choise === 'my-sub' && (
          <div className="settings-my-sub">
            <MySubscriptions />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSettings;
