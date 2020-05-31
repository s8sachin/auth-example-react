import React from 'react';
import NavbarComponent from '../components/Navbar';
import { useAuthContext } from '../utils/AuthContext';
import FullHeightBackground from '../components/FullHeightBackground';

const Profile = () => {
  const { user, authenticated } = useAuthContext();
  return(
    <div>
      <FullHeightBackground backgroundColor="skyblue" />
      <NavbarComponent />
      <div className="profile-info m-auto position-absolute">
        <div className="bg-white rounded p-3 mx-3 shadow-lg mb-2">
          <h3 className="text-center mb-0">Profile info</h3>
        </div>
        <div className="bg-white rounded p-3 mx-3 shadow-lg">
          <span className="font-weight-bold">Name: </span>
          <br />
          <span className="text-truncate d-inline-block max-width-100">
            {(user && user.name)}
          </span>
          <hr />
          <span className="font-weight-bold">Email: </span>
          <br />
          <span className="text-truncate d-inline-block max-width-100">
            {(user && user.email)}
          </span>
          <hr />
          <span className="font-weight-bold">Signed up on: </span>
          <br />
          <span className="text-truncate d-inline-block max-width-100">
            {(user && new Date(Date.parse(user.createdAt)).toDateString())}
          </span>
        </div>
      </div>
    </div>
  )
};

export default Profile;