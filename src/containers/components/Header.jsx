import React from 'react';

const Header = () => {
  const myStyle = {
    backgroundColor: 'rgb(164, 150, 77)'
  }
  return (
    <nav style={myStyle} className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">Navbar w/ text</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
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