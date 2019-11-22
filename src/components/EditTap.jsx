import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Pint from '../assets/pint.jpg';
import './styles.css';

class EditTap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this._name = null;
    this._brewery = null;
    this._abv = null;
    this._price = null;
    this._pints = null;
    this.handleAddBeerSubmission = this.handleAddBeerSubmission.bind(this);
  }

  handleEditBeerSubmission(event) {
    event.preventDefault();
    this.props.onEditBeerSubmission({ name: this._name.value, brewery: this._brewery.value, abv: this._abv.value, price: this._price.value, pints: this._name.value, img: Pint, id: props.id });
    this._name.value = '';
    this._brewery.value = '';
    this._abv.value = '';
    this._price.value = '';
    // this.setState({ redirect: true });
  }

  render() {
    var formStyle = {
      marginTop: '30px',
      marginLeft: '20%',
      marginRight: '20%',
    };
    var buttonStyle = {
      backgroundColor: '#110133',
      float: 'right'
    };
    var hStyle = {
      textAlign: 'center',
      fontFamily: 'IM Fell English, serif'
    };
    return (
      <div className='container'>
        <h4 style={hStyle}>Edit Keg Details</h4>
        <form style={formStyle} onSubmit={this.handleAddBeerSubmission}>
          <div className='input-field col s12'>
            <input
              type='text'
              id='name'
              defaultValue={props.name}
              ref={(input) => { this._name = input; }} />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              id='brewery'
              defaultValue={props.brewery}
              ref={(input) => { this._brewery = input; }} />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              id='abv'
              defaultValue={props.abv}
              ref={(input) => { this._abv = input; }} />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              id='price'
              defaultValue={props.price}
              ref={(input) => { this._price = input; }} />
          </div >
          <div className='input-field col s12'>
            <input
              type='number'
              min='0'
              max='124'
              id='pints'
              defaultValue={props.pints}
              ref={(input) => { this._pints = input; }} />
          </div >
          <button style={buttonStyle} type='submit' className='btn-floating btn-large waves-effect waves-light'><i className="material-icons">add</i></button>
        </form>
      </div>
    );
  }
}

EditTap.propTypes = {
  brewery: PropTypes.string,
  abv: PropTypes.number,
  pints: PropTypes.int,
  price: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.string,
  currentRouterPath: PropTypes.string,
};

export default EditTap;