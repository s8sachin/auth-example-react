import React, { createContext, useContext, useState, useEffect } from 'react';
import Axios from 'axios';

const authContext = createContext({
  authenticated: false, // to check if authenticated or not
  user: {}, // store all the user details
  accessToken: '', // accessToken of user for Auth0
  setUserDetails: () => {},
  setAccessToken: () => {},
  setAuthenticated: () => {}
});

export const useAuthContext = () => useContext(authContext);
export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;

export const updateTokenForPersistnce = token => {
  localStorage.setItem('token', token);
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
}

export const Auth = props => {
  const [user, setUser] = useState({}); //(initializeAuthState("user"));
  const [authenticated, setAuthenticated] = useState(false); //(initializeAuthState("authenticated"));
  const [accessToken, setAccessToken] = useState(null); //initializeAuthState("accessToken");

  const setUserDetails = userDetails => {
    setUser({ ...user, ...userDetails });
  };

  const authProviderValue = {
    user,
    authenticated,
    accessToken,
    setUserDetails,
    setAccessToken,
    setAuthenticated
  };
  return (
    <AuthProvider value={authProviderValue}> {props.children} </AuthProvider>
  );
};
