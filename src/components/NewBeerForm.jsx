import React from 'react';


function NewBeerForm() {
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