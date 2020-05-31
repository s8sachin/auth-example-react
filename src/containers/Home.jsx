import React, { useState } from 'react';
import { Button } from 'reactstrap';
import LoginModal from '../modules/LoginModal';
import SignupModal from '../modules/SignupModal';
import { useAuthContext } from '../utils/AuthContext';

const Home = () => {
  const [activeModal, setActiveModal] = useState(null);
  const coseModal = () => setActiveModal(null);
  const openLoginModal = () => setActiveModal('login');
  const openSignupModal = () => setActiveModal('signup');

  const {
    user,
    authenticated,
    setUserDetails,
    setAccessToken,
    setAuthenticated
  } = useAuthContext();

  return(
    <div>
      {console.log(user, 'XXXXX')}
      <Button onClick={openLoginModal}>Login</Button>
      <Button onClick={openSignupModal}>Signup</Button>

      {activeModal === 'login' && <LoginModal onClose={coseModal} isOpen={activeModal === 'login'} />}
      {activeModal === 'signup' && <SignupModal onClose={coseModal} isOpen={activeModal === 'signup'} />}
    </div>
  )
};

export default Home;