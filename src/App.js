import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sam from './containers/page/Sam';
import Home from './containers/page/Home';
import Header from './containers/components/Header';
import Login from './containers/page/Login';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sam" exact component={Sam} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>      
    </div>
  )
};

export default App;