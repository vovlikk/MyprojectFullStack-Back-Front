import '../UserPagesCss/UserProfile.css';
import { useState } from 'react';
import UserDelete from './UserDelete';
import UserSettings from './UserSettings';
import InfoUser from './UserInfo';




function UserProfile({ user, onClose }) {
  const [activeTab, setActiveTab] = useState('profile');


  return (
    <div className='user-profile-overlay' onClick={onClose}>
      <div className='user-profile-body' onClick={e => e.stopPropagation()}>
        <div className="tabs">
            <button onClick={() => setActiveTab('profile')}>Profile</button>
            <button onClick={() => setActiveTab('settings')} >Settings</button>
            <button onClick={() => setActiveTab('delete')}>Delete</button>
        </div>

        <div className="tab-content">
            <div className='tab-user-profile'>
            {activeTab === 'profile' && (
                <InfoUser user={user} />
            )}
            </div>

            <div className='tab-user-settings'>
            {activeTab === 'settings' && (
                
                <UserSettings />
            )}
            </div>

            <div className='tab-user-delete'>
            {activeTab === 'delete' && (
                 <UserDelete />
            )}
            </div>

            
            
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
