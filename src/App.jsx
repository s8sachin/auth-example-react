import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Auth, useAuthContext, updateTokenForPersistnce } from './utils/AuthContext';
import Home from './containers/Home';
import Profile from './containers/Profile';
import AuthCallback from './containers/AuthCallback'

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const authToken = localStorage.getItem('token');
if (authToken) updateTokenForPersistnce(authToken);

const PrivateRoute = ({ component: IncomingComponent, ...remainingProps }) => {
  const { pathname } = remainingProps.location;
  const { user } = useAuthContext();
  /** Check for token again in localStorage */
  const token = localStorage.getItem('token');
  if (!token) return <Redirect to="/" />;
  if (user._id) {
    return <Route {...remainingProps} component={IncomingComponent} />;
  }
  return <Redirect to={`/auth/callback?token=${token}&redirect=${pathname}`} />;
};

function App() {
  return (
    <div className="app">
      <Auth>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth/callback" component={AuthCallback} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </Auth>
    </div>
  );
}

export default App;
