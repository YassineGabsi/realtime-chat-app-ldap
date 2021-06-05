import React from 'react';
import Alert from './Alert';
import LoginPhoto from '../assets/login.jpg'

const ChatSelector = (props) => {
  const { handleChange, guestLogin, loginError } = props;
  return (
    <div className="chatapp__form--container">

      <div className="chatapp__form--guest">
        <div className="row">
          <div className="col-6 d-flex align-items-center justify-content-center login-form-container">
            <h3>Guest Login</h3>
            {/*<p>You can either login, register or enter as a guest</p> */}
            {/*<p>Guests cannot change channels or private message other users</p>*/}
            <form onSubmit={guestLogin}>
              <input onChange={handleChange} type="text" name="guestSignup" placeholder="Enter a Guest Name" label="Enter a Guest Name"/>
              <button>Enter</button>
            </form>
            {
              (loginError.length)
                  ? <Alert
                      header="Login Error"
                      content={loginError[loginError.length - 1].response.data.error}
                  />
                  :null
            }
          </div>
          <div className="col-6 text-center">
            <img className="img-fluid photo-login" src={LoginPhoto} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatSelector;
