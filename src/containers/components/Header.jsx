import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../../actions/user';

const Header = () => {
  const myStyle = {
    backgroundColor: 'rgb(164, 150, 77)'
  };

  const dispatch = useDispatch();

  const logoutClick = () => {
    dispatch(logout());
  };

  return (
    <nav style={myStyle} className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to='/'>Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/login'>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/register'>Register</Link>
          </li>
          <li className="nav-item">
            <text style={{cursor: 'pointer'}} className="nav-link" onClick={logoutClick}>Logout</text>
          </li>
        </ul>
        <span className="navbar-text">
          Navbar text with an inline element
        </span>
      </div>
    </nav>
  );
};

export default Header;