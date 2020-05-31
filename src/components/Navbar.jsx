import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { useAuthContext, logoutUser } from '../utils/AuthContext';
import LoginModal from '../modules/LoginModal';
import SignupModal from '../modules/SignupModal';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const coseModal = () => setActiveModal(null);
  const openLoginModal = () => setActiveModal('login');
  const openSignupModal = () => setActiveModal('signup');

  const { user, authenticated } = useAuthContext();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link className="text-decoration-none" to="/">Auth example</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="m-1">
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {!authenticated ? (
              <>
              <NavItem className="m-1">
                <Button className="w-100" size="sm" onClick={openLoginModal}>Login</Button>
              </NavItem>
              <NavItem className="m-1">
                <Button className="w-100" size="sm" onClick={openSignupModal}>Sign up</Button>
              </NavItem>
              </>)
            : 
              <NavItem>
                <Button className="w-100" size="sm" onClick={logoutUser}>Logout</Button>
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
      {activeModal === 'login' && <LoginModal onClose={coseModal} isOpen={activeModal === 'login'} />}
      {activeModal === 'signup' && <SignupModal onClose={coseModal} isOpen={activeModal === 'signup'} />}
    </div>
  );
}

export default NavbarComponent;
