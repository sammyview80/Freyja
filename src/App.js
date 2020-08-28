import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sam from './containers/page/Sam';
import Nav from './containers/Nav/Nav';
import Home from './containers/page/Home';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sam" exact component={Sam} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>      
    </div>
  )
};

export default App;