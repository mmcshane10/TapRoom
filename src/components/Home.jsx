import React from 'react';
import Splash from '../assets/Splash.jpg';

function Home() {
  var splashStyle = {
    backgroundImage: `url(${Splash})`,
    backgroundAttachment: 'fixed',
    height: '1000px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  return (
    <div style={splashStyle}>
      {/* <div>
        <p>Welcome to McShane's. A place for all.</p>
      </div> */}
    </div>
  );
}

export default Home;