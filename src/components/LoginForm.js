import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import LoginPhoto from '../assets/login.jpg'



export default class LoginForm extends Component {
  constructor(){
    super();

    this.state = {
      username: "",
      password: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    const { username, password } = this.state;
    e.preventDefault();
    this.props.userLogin({ username, password });
  }


  render() {
    return (
      <div className="chatapp__form--container">
        <div className="chatapp__form--modal">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-center login-form-container">
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="username" type="text" label="Username" placeholder="Username"/>
                <input onChange={this.handleChange} name="password" type="password" label="Password" placeholder="Password"/>
                {
                  (this.props.loginError.length)
                      ? <Alert
                          header="Login Error has happened"
                          content="Must enter a valid Username or password."
                      />
                      : null
                }
                <button>Login</button>
              </form>
            </div>
            <div className="col-6 text-center">
              <img className="img-fluid photo-login" src={LoginPhoto} alt=""/>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
}
