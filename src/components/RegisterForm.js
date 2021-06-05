import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import { certif } from '../certifs/certfiManager';
import LoginPhoto from "../assets/login.jpg";


export default class RegisterForm extends Component {
  constructor(){
    super();

    this.state = {
      username: "",
      password: "",
      name: "",
      lastName: "",
      card: "",
      email: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const csr = certif();
    const { username, password, email, card, name, lastName } = this.state;
    this.props.userRegistration({ username, password, email, card, name, lastName, csr });
  }

  render() {
    return (
      <div className="chatapp__form--container">
        <div className="chatapp__form--modal">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-center login-form-container">
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="username" type="text" label="Username" placeholder=" Enter a Username"/>
                <input onChange={this.handleChange} name="password" type="password" label="Password" placeholder=" Enter a password"/>
                <input onChange={this.handleChange} name="email" type="email" label="Email" placeholder="Enter your email"/>
                <input onChange={this.handleChange} name="card" type="card" label="Card" placeholder="Enter your card number"/>
                <input onChange={this.handleChange} name="name" type="name" label="Password" placeholder="Enter your name"/>
                <input onChange={this.handleChange} name="lastName" type="lastName" label="Last Name" placeholder="Enter your last name"/>
                {
                  (this.props.registrationError.length)
                      ? <Alert
                          header="Something went wrong"
                          content={`${this.props.registrationError[this.props.registrationError.length - 1].response.data.error}`}
                      />
                      : null
                }
                <button>Register</button>
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

RegisterForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
}
