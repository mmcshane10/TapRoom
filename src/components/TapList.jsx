import React from 'react';
import Tap from './Tap';
import Pint from '../assets/pint.jpg';
import 'materialize-css/dist/css/materialize.min.css';

var tapList = [
  {
    name: 'Beer 1',
    brand: 'Brewery 1',
    abv: '5.0%',
    price: '$6',
    pints: '124',
    img: Pint
  },
  {
    name: 'Beer 2',
    brand: 'Brewery 2',
    abv: '6.0%',
    price: '$7',
    pints: '124',
    img: Pint
  },
  {
    name: 'Beer 3',
    brand: 'Brewery 3',
    abv: '6.9%',
    price: '$6',
    pints: '124',
    img: Pint
  },
  {
    name: 'Beer 4',
    brand: 'Brewery 4',
    abv: '4.0%',
    price: '$5',
    pints: '124',
    img: Pint
  },
  {
    name: 'Beer 5',
    brand: 'Brewery 5',
    abv: '8.0%',
    price: '$7',
    pints: '124',
    img: Pint
  },
  {
    name: 'Beer 6',
    brand: 'Brewery 6',
    abv: '7.0%',
    price: '$6',
    pints: '124',
    img: Pint
  },
  {
    name: 'Beer 7',
    brand: 'Brewery 7',
    abv: '11.0%',
    price: '$8',
    pints: '124',
    img: Pint
  },
  {
    name: 'Beer 8',
    brand: 'Brewery 8',
    abv: '4.4%',
    price: '$5',
    pints: '124',
    img: Pint
  },
];

function TapList() {
  var hStyle = {
    textAlign: 'center',
    fontFamily: 'IM Fell English, serif'
  }
  return (
    <div className='container'>
      <h4 style={hStyle}>Currently On Tap</h4>
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