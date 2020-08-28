import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';

import { loginUser } from '../../actions/user';
import { Redirect } from 'react-router';

const Login = ({ isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const proceedLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
  }

  if (isAuthenticated){
    return <Redirect to='/' />
  }

  return(
    <form onSubmit={proceedLogin}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated
})

export default connect(mapStateToProps)(Login);