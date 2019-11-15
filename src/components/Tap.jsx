import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Tap(props) {
  var spanStyle = {
    fontWeight: 'bold',
    marginRight: '2%'
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
  }
  var actionStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  return(
      <div className='col s12 m6 l3'>
        <div className='card'>
          <div style={imgStyle} className='card-image'>
            <img src={props.img}/>
            <span style={titleStyle} className='card-title'>{props.name}</span>
          </div>
          <div className='card-content'>
            <p><span style={spanStyle}>Brewery:</span>{props.brand}</p>
            <p><span style={spanStyle}>ABV:</span>{props.abv}</p>
            <p><span style={spanStyle}>Price:</span>{props.price}</p>
            <p><span style={spanStyle}>Pints:</span>{props.pints}</p>
          </div>
          <div style={actionStyle} className='card-action flex-container'>
            <button style={buttonStyle} type='click' className='btn-floating btn-small waves-effect waves-light'><i className='material-icons'>exposure_neg_1</i></button>
            <button style={buttonStyle} type='click' className='btn-floating btn-small waves-effect waves-light'><i className='material-icons'>edit</i></button>
          </div>
        </div>
      </div>
  );
}

Tap.propTypes = {
  brand: PropTypes.string,
  abv: PropTypes.string,
  pints: PropTypes.int,
  img: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string
};


export default Tap;

