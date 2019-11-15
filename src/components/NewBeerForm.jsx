import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function NewBeerForm() {
  var formStyle = {
    marginTop: '30px',
    marginLeft: '20%',
    marginRight: '20%',
  }
  var buttonStyle = {
    backgroundColor: '#110133'
  }
  return (
    <div className='container'>
      <form style={formStyle}>
        <div className='input-field col s12'>
          <input
            type='text'
            id='name'
            placeholder='Beer Name' />
        </div>
        <div className='input-field col s12'>
          <input
            type='text'
            id='brand'
            placeholder='Brewery' />
        </div>
        <div className='input-field col s12'>
          <input
            type='text'
            id='abv'
            placeholder='ABV%' />
        </div>
        <div className='input-field col s12'>
          <input
            type='text'
            id='price'
            placeholder='Price' />
        </div >
        <div className='form-control'></div>
        <input
          type='hidden'
          id='custId'
          value='124' />

        <button style={buttonStyle} type='submit' className='btn-floating btn-large waves-effect waves-light'><i className="material-icons">add</i></button>
      </form>
    </div>
  );
}

export default NewBeerForm;