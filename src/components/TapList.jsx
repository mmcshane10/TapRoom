import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props) {
  var hStyle = {
    textAlign: 'center',
    fontFamily: 'IM Fell English, serif'
  };
  return (
    <div className='container'>
      <h4 style={hStyle}>Currently On Tap</h4>
      <div className='row'>
        {props.tapList.map((tap) =>
          <Tap
            name={tap.name}
            brand={tap.brand}
            abv={tap.abv}
            price={tap.price}
            pints={tap.pints}
            img={tap.img}
            key={tap.id}
          />
        )}
      </div>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;