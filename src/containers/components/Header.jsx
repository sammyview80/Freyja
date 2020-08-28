import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';

import { logout, loginCheck } from '../../actions/user';

const Header = ({ isAuthenticated, token }) => {
  const myStyle = {
    backgroundColor: 'rgb(164, 150, 77)'
  };

  const dispatch = useDispatch();
  dispatch(loginCheck(token))

  const logoutClick = () => {
    dispatch(logout());
  };

  const checkAuth = () => {
    if (isAuthenticated) {
      return (
        <Fragment>
          <li className="nav-item">
            <span style={{ cursor: 'pointer' }} className="nav-link" onClick={logoutClick}>Logout</span>
          </li>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <li className="nav-item">
          <Link className="nav-link" to='/login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/register'>Register</Link>
        </li>
      </Fragment>
    )
  }

  return (
    <nav style={myStyle} className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to='/'>Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {checkAuth()}          
        </ul>
        <span className="navbar-text">
          Navbar text with an inline element
        </span>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  token: state.user.token,
});

export default connect(mapStateToProps)(Header);