import React from 'react';

function Login() {
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
      <h4 style={hStyle}>Employee Login</h4>
      <form style={formStyle}>
        <div className='input-field col s12'>
          <input
            type='text'
            id='username'
            placeholder='Username' />
        </div>
        <div className='input-field col s12'>
          <input
            type='text'
            id='password'
            placeholder='Password' />
        </div>
        <button style={buttonStyle} type='submit' className='btn-floating btn-large waves-effect waves-light'><i className="material-icons">arrow_forward</i></button>
      </form>
    </div>
  );
}

export default Login;