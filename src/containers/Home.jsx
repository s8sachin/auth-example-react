import React, { useState } from 'react';
import { Button } from 'reactstrap';
import LoginModal from '../modules/LoginModal';
import SignupModal from '../modules/SignupModal';

const Home = () => {
  const [activeModal, setActiveModal] = useState(null);
  const coseModal = () => setActiveModal(null);
  const openLoginModal = () => setActiveModal('login');
  const openSignupModal = () => setActiveModal('signup');

  return(
    <div>
      <Button onClick={openLoginModal}>Login</Button>
      <Button onClick={openSignupModal}>Signup</Button>

      {activeModal === 'login' && <LoginModal onClose={coseModal} isOpen={activeModal === 'login'} />}
      {activeModal === 'signup' && <SignupModal onClose={coseModal} isOpen={activeModal === 'signup'} />}
    </div>
  )
};

export default Home;