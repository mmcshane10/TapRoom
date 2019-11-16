import React from 'react';
import Splash from '../assets/Splash.jpg';

function Home() {
  var splashStyle = {
    display: 'flex',
    backgroundImage: `url(${Splash})`,
    backgroundAttachment: 'fixed',
    height: '1000px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'flex-end',
  };
  var cardStyle = {
    backgroundColor: 'rgb(255, 255, 255, 0.75)',
    width: '40%',
    padding: '5',
    bottom: '20%',
    textAlign: 'center',
    fontSize: '20px',
    color: '#110133'
  }
  return (
    <div style={splashStyle}>
        <div style={cardStyle} className='card'>
          <p>Welcome to McShane's. An English-style pub for all.</p> 
          <p>Opening Spring 2020. Check back next week for more information.</p>
        </div>
      
    </div>
  );
}

export default Home;