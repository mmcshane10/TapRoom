import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props) {
  var hStyle = {
    textAlign: 'center',
    fontFamily: 'IM Fell English, serif'
  };
  var iaStyle = {
    color: 'red',
    fontSize: '18px',
    marginLeft: '2%',
  };
  var ibStyle = {
    color: 'green',
    fontSize: '18px',
    marginLeft: '2%',
  };
  var pStyle = {
    textAlign: 'center'
  }

  return (
    <div className='container'>
      <h4 style={hStyle}>Currently On Tap</h4>
      <p style={pStyle}><i style={iaStyle} className="material-icons">new_releases</i> = High ABV Content</p>
      <p style={pStyle}><i style={ibStyle} className="material-icons">monetization_on</i> = Beer on Sale</p>
      <div className='row'>
        {props.tapList.map((tap) =>
          <Tap
            name={tap.name}
            brewery={tap.brewery}
            abv={tap.abv}
            price={tap.price}
            pints={tap.pints}
            img={tap.img}
            id={tap.id}
            key={tap.id}
            onSubtractPint={props.onSubtractPint}
            currentRouterPath={props.currentRouterPath}
          />
        )}
      </div>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onSubtractPint: PropTypes.func,
  currentRouterPath: PropTypes.string,
};

export default TapList;