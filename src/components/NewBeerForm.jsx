import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Pint from '../assets/pint.jpg';


class NewBeerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this._name = null;
    this._brewery = null;
    this._abv = null;
    this._price = null;
    this.handleAddBeerSubmission = this.handleAddBeerSubmission.bind(this);
  }

  handleAddBeerSubmission(event) {
    event.preventDefault();
    this.props.onNewBeerCreation({ name: this._name.value, brewery: this._brewery.value, abv: this._abv.value, price: this._price.value, pints: 124, img: Pint, id: v4() });
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
        <h4 style={hStyle}>Add a New Keg</h4>
        <form style={formStyle} onSubmit={this.handleAddBeerSubmission}>
          <div className='input-field col s12'>
            <input
              type='text'
              id='name'
              placeholder='Beer Name' 
              ref={(input) => { this._name = input; }} />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              id='brewery'
              placeholder='Brewery'
              ref={(input) => { this._brewery = input; }} />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              id='abv'
              placeholder='ABV%'
              ref={(input) => { this._abv = input; }} />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              id='price'
              placeholder='Price'
              ref={(input) => { this._price = input; }} />
          </div >
          <button style={buttonStyle} type='submit' className='btn-floating btn-large waves-effect waves-light'><i className="material-icons">add</i></button>
        </form>
      </div>
    );
  }
}

NewBeerForm.PropTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;