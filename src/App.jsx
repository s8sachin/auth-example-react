import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './containers/Home';
import { Auth } from './utils/AuthContext';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="app">
      <Auth>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Auth>
    </div>
  );
}

export default App;
