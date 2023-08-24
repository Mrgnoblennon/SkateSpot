import React from 'react';
import AuthService from '../utils/auth'; // Replace with the correct path to AuthService

const Profile = () => {
  const isLoggedIn = AuthService.loggedIn();

  if (isLoggedIn) {
    const user = AuthService.getProfile();
    console.log('Decoded User Profile:', user);
    return (
      <div>
        <h1>User Profile</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        {/* ... other user data */}
      </div>
    );
  } else {
    return <p>Please log in to view the profile.</p>;
  }
};

export default Profile;
