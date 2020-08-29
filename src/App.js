import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sam from './containers/page/Sam';
import Nav from './containers/Nav/Nav';
import Home from './containers/page/Home';
import Signup from './containers/page/Signup';
import Login from './containers/page/Login';
import Logout from './containers/Logout/Logout';
import CreateQuestions from './containers/page/CreateQuestions';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token , setToken] = useState(null);

  const onLoginReponse =() => {
    setAuthenticated(true)
    console.log(authenticated)
  }
  const onSignpupReponse = (tk) => {
    setToken(tk)
    localStorage.setItem('token', tk)
  }
  useEffect(() => {
    const tk = localStorage.getItem('token');
    setToken(tk)
    if (tk){
      setAuthenticated(true)
    }
  }, [])
  const logoutHandler = () => {
    setAuthenticated(false)
    window.location.reload(false);

  }
  return (
    <div className="container">
      <BrowserRouter>
      <Nav auth={authenticated}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sam" exact render={() => <Sam token={token} />} />
          <Route path="/signup" exact render={() => <Signup onSucess={(token) => onSignpupReponse(token)} />} />
          <Route path="/login" exact render={() => <Login onSucess={onLoginReponse} />} />
          <Route path="/logout" exact render={() => (<Logout logout={logoutHandler} />)} />
          <Route path="/create-questions" exact render={() => (<CreateQuestions changed={false} submit={false} />)} />
        </Switch>
      </BrowserRouter>      
    </div>
  )
};

export default App;