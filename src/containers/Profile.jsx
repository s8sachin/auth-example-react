import React from 'react';
import NavbarComponent from '../components/Navbar';
import { useAuthContext } from '../utils/AuthContext';

const Profile = () => {
  const { user, authenticated } = useAuthContext();
  return(
    <div>
      <NavbarComponent />
      <div className="bg-white profile-info rounded m-auto position-absolute shadow-lg p-3 mx-3">
        <div className="">
          <span className="font-weight-bold">Name: </span><br />
          <span className="text-truncate d-inline-block max-width-100">{(user && user.name)}Sachin SachinSachinSachinSachinSachinSachin</span><br /><hr />
          <span className="font-weight-bold">Email: </span><br />
          <span className="text-truncate d-inline-block max-width-100">{(user && user.email)}</span><br /><hr />
          <span className="font-weight-bold">Signed up on: </span><br />
          <span className="text-truncate d-inline-block max-width-100">{(user && new Date(Date.parse(user.createdAt)).toDateString())}</span>
        </div>
      </div>
    </div>
  )
};

export default Profile;