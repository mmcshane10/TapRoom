import React from 'react';
import Splash from '../assets/Splash.jpg';

function Home() {
    var splashStyle = {
        backgroundImage: `url(${Splash})`,
        backgroundAttachment: 'fixed',
        height: '800px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    return (
        <div style={splashStyle}>
        </div>
    );
}

export default Home;