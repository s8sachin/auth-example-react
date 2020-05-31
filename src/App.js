import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './containers/Home';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
