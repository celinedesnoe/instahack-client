import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { postLogIn } from "../api";

import "./LoginPage.css";

import ButtonLinkFacebook from "./ButtonLinkFacebook.js";
import ButtonSubmit from "./ButtonSubmit.js";
import FooterBlue from "./FooterBlue.js";

import InstagramLogo from "../images/Instagram_logo.png";

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

        {/* <img className="whitefb" src={whitefb} alt="facebook icon" /> */}

        <ButtonLinkFacebook
          text="Continue with Facebook"
          styling="blue-button"
          link="https://www.facebook.com"
          className="buttonfacebook"
        />

        <div className="d-flex flex-row align-items-center hro">
          <hr />
          <p className="or">OR</p>
          <hr />
        </div>

        <form
          className="logInForm"
          onSubmit={event => this.handleSubmit(event)}
        >
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
          </div>

          <ButtonSubmit text="Log In" styling="blue-button" />
        </form>

        <a href="#" className="forgotpassword">
          Forgot password?
        </a>

        <FooterBlue
          text="Don't have an account?"
          link="/accounts/signup"
          textLink="Sign up"
        />
      </div>
    );
  }
}

export default LoginPage;
