import React from 'react';
import Tap from './Tap';
import Pint from '../assets/pint.png';

var tapList = [
  {
    name: 'Beer 1',
    brand: 'Brand 1',
    abv: '5.0%',
    price: '$6',
    pints: '124',
    img: Pint
  },
];

function TapList() {
  return (
    <div className='container'>
      <div>
        <h3>Our Current Offerings:</h3>
      </div>
      <div className='container'>
        <div className='row'>
          {tapList.map((tap, index) =>
            <Tap
              name={tap.name}
              brand={tap.brand}
              abv={tap.abv}
              price={tap.price}
              pints={tap.pints}
              img={tap.img}
              key={index}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TapList;