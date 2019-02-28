import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { postLogIn } from "../api";

import "./LoginPage.css";

import ButtonLink from "./ButtonLink.js";
import ButtonSubmit from "./ButtonSubmit.js";
import Footer from "./Footer.js";

import InstagramLogo from "../images/Instagram_logo.png";
import whitefb from "../images/facebookiconwhite.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      originalPassword: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    //submit login info to the back-end...
    postLogIn(this.state).then(response => {
      console.log("Log In", response.data);
      this.props.loginSuccess(response.data);
    });
  }

  render() {
    return this.props.currentUser ? (
      <Redirect to="/" />
    ) : (
      <div className="LoginPage">
        <img
          className="instagramlogo"
          src={InstagramLogo}
          alt="instagram logo"
        />

        <img className="whitefb" src={whitefb} alt="facebook icon" />

        <ButtonLink
          text="Connect with Facebook"
          styling="blue-button"
          link="https://www.facebook.com"
        />

<<<<<<< HEAD
        <div className="w-100 d-flex flex-row align-items-center hro">
=======
        <div className="d-flex flex-row align-items-center hro">
>>>>>>> 455bc2dfb64811c7c0419533db17beb0831fc749
          <hr />
          <p className="or">OR</p>
          <hr />
        </div>
<<<<<<< HEAD
        <form onSubmit={event => this.handleSubmit(event)}>
          <div>
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.email}
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.originalPassword}
              name="originalPassword"
              type="text"
              placeholder="Password"
            />
=======

        <form className="logInForm">
          <div className="formField">
            <div>
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.email}
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.originalPassword}
                name="originalPassword"
                type="text"
                placeholder="Password"
              />
            </div>
>>>>>>> 455bc2dfb64811c7c0419533db17beb0831fc749
          </div>

          <ButtonSubmit text="Log In" styling="blue-button" />
        </form>

        <a href="#" className="forgotpassword">
          Forgot password?
        </a>

        <Footer
          text="Don't have an account?"
          link="/accounts/signup"
          textLink="Sign up"
        />
      </div>
    );
  }
}

export default LoginPage;
