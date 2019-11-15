import React from 'react';
import Tap from './Tap';
import Pint from '../assets/pint.jpg';
import 'materialize-css/dist/css/materialize.min.css';

var tapList = [
  {
    name: 'Beer 1',
    brand: 'Brand 1',
    abv: '5.0%',
    price: '$6',
    pints: '124',
    img: Pint
  },
  {
    name: 'Beer 2',
    brand: 'Brand 2',
    abv: '6.0%',
    price: '$7',
    pints: '124',
    img: Pint
  },
  {
    name: 'Beer 3',
    brand: 'Brand 3',
    abv: '6.9%',
    price: '$6',
    pints: '124',
    img: Pint
  },
];

function TapList() {
  return (
    <div className='container'>
      <h3>Our Current Offerings:</h3>
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
  );
}

export default TapList;