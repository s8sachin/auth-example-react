import React from 'react';
import NavbarComponent from '../components/Navbar';
import { useAuthContext } from '../utils/AuthContext';

const Profile = () => {
  const { user, authenticated } = useAuthContext();
  return(
    <div>
      <NavbarComponent />
      <div className="bg-white profile-info rounded m-auto position-absolute shadow-lg p-3">
        <div>
          <span className="font-weight-bold">Name: {(user && user.name) || 'Sachin '}</span><br />
          <span className="font-weight-bold">Email: {(user && user.name) || 'sachin@gmail.com'}</span>
        </div>
      </div>
    </div>
  )
};

export default Profile;