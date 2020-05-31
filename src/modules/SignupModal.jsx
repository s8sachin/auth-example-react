import React, { useState, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { userSignup } from '../utils/api/user';
import { useAuthContext, updateTokenForPersistnce } from '../utils/AuthContext';
import { useHistory } from 'react-router-dom';

const SignupModal = (props) => {
  const {
    isOpen,
    onClose
  } = props;
  const history = useHistory();

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

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

  const onSignup = async e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmPasswordRef.current.value.trim();

    if (!name) return setErrorState('Name is missing');
    if (!password) return setErrorState('Password is missing');
    if (password !== confirmPassword) return setErrorState('Password & confirm password mismatch');

    try {
      setLoading(true);
      const { user, token } = await userSignup({email, password, name});
      if (user && token) {
        updateTokenForPersistnce(token);
        setAccessToken(token);
        setUserDetails(user);
        setAuthenticated(true);
        setLoading(false);
        onClose();
        history.push('/profile');
      }
    } catch (e) {
      console.error(e);
      setErrorState('User exists');
      setLoading(false);
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} toggle={onClose} >
        <ModalHeader toggle={onClose}>Signup</ModalHeader>
        <ModalBody>
          <Form id="signupForm" onSubmit={onSignup}>
            {error && <Alert color="danger">{error}</Alert>}
            <FormGroup>
              <Label className="font-weight-bold" for="name">Name :</Label>
              <input className="form-control" required ref={nameRef} type="name" name="name" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label className="font-weight-bold" for="email">Email :</Label>
              <input className="form-control" required ref={emailRef} type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label className="font-weight-bold" for="passowrd">Password :</Label>
              <input className="form-control" minLength={8} required ref={passwordRef} type="password" name="password" id="passowrd" placeholder="password" />
            </FormGroup>
            <FormGroup>
              <Label className="font-weight-bold" for="confirmPassword">Confirm password :</Label>
              <input className="form-control" minLength={8} required ref={confirmPasswordRef} type="password" name="password" id="confirmPassword" placeholder="Confirm password" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button disabled={loading} type="submit" className="w-100" form="signupForm" color="primary" onClick={onclose}>Signup</Button>{' '}
          {/* <Button color="secondary" onClick={onClose}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

SignupModal.prototype = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

export default SignupModal;