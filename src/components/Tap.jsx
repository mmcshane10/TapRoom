import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  var spanStyle = {
    fontWeight: 'bold',
    color: '#110133',
    marginRight: '2%',
  };
  var titleStyle = {
    color: '#110133'
  };
  var imgStyle = {
    paddingTop: '5%',
    marginBottom: '-5%',
    position: 'relative',
  };
  var buttonStyle = {
    backgroundColor: '#110133'
  };
  var actionStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  };
  var lowKegStyle = {
    fontWeight: 'bold',
    color: 'red',
    marginRight: '2%'
  };
  var iaStyle = {
    color: 'red',
    fontSize: '18px',
    marginLeft: '2%'
  }

  var ibStyle = {
    color: 'green',
    fontSize: '18px',
    marginLeft: '2%'
  }

  function SubtractPintClicked() {
    let searchId = props.id;
    props.onSubtractPint(searchId);
  }

  var pintDisplay;
  if (props.pints < 20) {
    pintDisplay = <p style={lowKegStyle}><span>Pints: </span>{props.pints}</p>;
  } else {
    pintDisplay = <p><span style={spanStyle}>Pints:</span>{props.pints}</p>;
  }

  var abvDisplay;
  if (props.abv > 7.9) {
    abvDisplay = <p><span style={spanStyle}>ABV:</span>{props.abv}%<i style={iaStyle}className="material-icons">new_releases</i></p>;
  } else {
    abvDisplay = <p><span style={spanStyle}>ABV:</span>{props.abv}%</p>;
  }

  var priceDisplay;
  if (props.price < 5.01) {
    priceDisplay = <p><span style={spanStyle}>Price:</span>${props.price}<i style={ibStyle} className="material-icons">monetization_on</i></p>;
  } else {
    priceDisplay = <p><span style={spanStyle}>Price:</span>${props.price}</p>;
  }

  var adminOptions;
  if (props.currentRouterPath === '/admin') {
    adminOptions = <div style={actionStyle} className='card-action'>
      <button style={buttonStyle} onClick={SubtractPintClicked} type='click' className='btn-floating btn-small waves-effect waves-light'><i className='material-icons'>exposure_neg_1</i></button>
      <button style={buttonStyle} type='click' className='btn-floating btn-small waves-effect waves-yellow'><i className='material-icons'>edit</i></button>
    </div>;
  } else {
    adminOptions = null;
  }

  return(
    <div className='col s6 m4 l3'>
      <div className='card z-depth-2'>
        <div style={imgStyle} className='card-image'>
          <img src={props.img}/>
          <span style={titleStyle} className='card-title'>{props.name}</span>
        </div>
        <div className='card-content'>
          <p><span style={spanStyle}>Brewery:</span>{props.brewery}</p>
          {abvDisplay}
          {priceDisplay}
          {pintDisplay}
        </div>
        {adminOptions}
      </div>
    </div>
  );
}

Tap.propTypes = {
  brewery: PropTypes.string,
  abv: PropTypes.number,
  pints: PropTypes.int,
  img: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.string,
  onSubtractPint: PropTypes.func,
  currentRouterPath: PropTypes.string,
};

export default Tap;

