import React, { useRef, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { userLogin } from '../utils/api/user';
import { updateTokenForPersistnce, useAuthContext } from '../utils/AuthContext';
import { useHistory } from 'react-router-dom';

const LoginModal = ({
  isOpen,
  onClose
}) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  const {
    user,
    authenticated,
    setUserDetails,
    setAccessToken,
    setAuthenticated
  } = useAuthContext();

  const setErrorState = (error) => {
    setError(error);
    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  const onLogin = async e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const { user, token } = await userLogin({email, password});
      if (user && token) {
        updateTokenForPersistnce(token);
        setAccessToken(token);
        setUserDetails(user);
        setAuthenticated(true);
        onClose();
        history.push('/profile');
      }
    } catch (e) {
      console.error(e);
      setErrorState('Invalid credentials')
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} toggle={onClose} >
        <ModalHeader toggle={onClose}>Login</ModalHeader>
        <ModalBody>
          <Form id="loginForm" onSubmit={onLogin}>
            {error && <Alert color="danger">{error}</Alert>}
            <FormGroup>
              <Label className="font-weight-bold" for="email">Email :</Label>
              <input className="form-control" required ref={emailRef} type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label className="font-weight-bold" for="passowrd">Password :</Label>
              <input className="form-control" required ref={passwordRef} type="password" name="password" id="passowrd" placeholder="password" />
            </FormGroup>
          </Form>
          {/* <Button className="w-100" type="submit" form="loginForm" color="primary" onClick={onclose}>Submit</Button>{' '} */}
        </ModalBody>
        <ModalFooter>
          <Button type="submit" className="w-100" form="loginForm" color="primary" onClick={onclose}>Login</Button>{' '}
          {/* <Button color="secondary" onClick={onClose}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

LoginModal.prototype = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

export default LoginModal;