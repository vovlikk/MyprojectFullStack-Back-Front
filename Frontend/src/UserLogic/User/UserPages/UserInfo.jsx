import React from 'react';
import '../UserPagesCss/UserInfo.css'

function UserInfo({ user }) {
  

  if (!user) {
    return <div>Loading....</div>;
  }

  return (
    <div className='user-info'>

    <div className="user-info-container">
    <h3 className="user-info-title">Info about user</h3>
    <div className="user-info-username">Name User: {user.userName}</div>
    <div className="user-info-email">Email: {user.email}</div>
    <div className="user-info-phone">Phone: {user.phone}</div>
    </div>
    </div>

  );
}


export default UserInfo;
