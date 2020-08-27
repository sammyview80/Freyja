import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sam from './containers/page/Sam';
import Home from './containers/page/Home';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sam" exact component={Sam} />
        </Switch>
      </BrowserRouter>      
    </div>
  )
};

export default App;