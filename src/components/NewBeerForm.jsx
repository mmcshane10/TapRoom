import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function NewBeerForm() {
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name' />
        <input
          type='text'
          id='brand'
          placeholder='Brewery' />
        <input
          type='text'
          id='abv'
          placeholder='ABV%' />
        <input
          type='text'
          id='price'
          placeholder='Price' />
        <input 
          type='hidden'
          id='custId'
          value='124' />
        
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewBeerForm;