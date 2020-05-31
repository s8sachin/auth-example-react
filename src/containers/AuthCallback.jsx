import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import {
  useAuthContext,
  updateTokenForPersistnce
} from '../utils/AuthContext';
import { userProfile } from '../utils/api/user';

const AuthCallback = ({ location, history }) => {
  const { setUserDetails, setAccessToken, setAuthenticated } = useAuthContext();
  const getUser = async (token, redirect) => {
    try {
      updateTokenForPersistnce(token);
      const newUser = await userProfile();
      setAccessToken(token);
      setUserDetails(newUser);
      setAuthenticated(true);
      if (redirect) return history.push(redirect);
      history.push('/record');
    } catch (err) {
      console.error(err, 'login error');
      // const errorKey = err.response.data.key;
      history.push('/');
    }
  };

  useEffect(() => {
    const { token, redirect } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    getUser(token, redirect);
  }, []);

  return <></>;
};

AuthCallback.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};

export default AuthCallback;
