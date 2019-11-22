import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var iconStyle = {
    marginLeft: '2%'
  };
  var navStyle = {
    backgroundColor: '#110133',
    borderBottom: 'solid 1px burlywood'
  };
  var titleStyle = {
    fontFamily: 'IM Fell English, serif',
    marginLeft: '2%',
    color: 'burlywood'
  };

  return(
    <div>
      <nav>
        <div style={navStyle} className="nav-wrapper">
          <Link to='/'><i style={iconStyle} className="fas fa-beer fa-4x"><span style={titleStyle}>McShane's</span></i></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/taplist'>Tap List</Link></li>
            <li><Link to='/addbeer'>Add A Beer</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;