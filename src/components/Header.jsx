import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function Header() {
  var iconStyle = {
    marginLeft: '2%'
  };
  var navStyle = {
    backgroundColor: '#110133'
  }

  return(
    <div>
      <nav>
        <div style={navStyle} className="nav-wrapper">
          <Link to='/'><i style={iconStyle} className="fas fa-beer fa-4x"></i></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">Tap List</a></li>
            <li><a href="">Employee Login</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;