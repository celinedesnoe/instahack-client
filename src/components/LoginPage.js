import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LoginPage.css";
import { postLogIn } from "../api";

import ButtonLink from "./ButtonLink.js";
import ButtonSubmit from "./ButtonSubmit.js";
import Footer from "./Footer.js";

import myPic from "../images/Instagram_logo.png";

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
      <div className="flex">
        <img src={myPic} alt="logo IG" className="instagramlogo" />

        <ButtonLink
          text="Connect with Facebook"
          styling="blue-button"
          link="https://www.facebook.com"
        />

        <div className="w-100 d-flex flex-row align-items-center hro">
          <hr />
          <p className="or">OR</p>
          <hr />
        </div>
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
          </div>

          <ButtonSubmit text="Log In" styling="blue-button" />
        </form>
        <a href="#">Forgot password?</a>

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
