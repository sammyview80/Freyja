import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sam from './containers/page/Sam';
import Home from './containers/page/Home';
import Header from './containers/components/Header';

const App = () => {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/sam" exact component={Sam} />
      </BrowserRouter>      
    </div>
  )
};

export default App;