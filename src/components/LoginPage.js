import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LoginPage.css";
import { postLogIn } from "../api";

import ButtonLink from "./ButtonLink.js";

import ButtonSubmit from "./ButtonSubmit.js";

import myPic from "../images/Instagram_logo.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      phoneNumber: null,
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
        <div>
          <img src={myPic} alt="logo IG" />
        </div>
        <ButtonLink
          text="Connect with Facebook"
          styling="blue-button"
          link="https://www.facebook.com"
        />
        <div>
          <hr />
          OR <hr />
        </div>
        <form>
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
      </div>
    );
  }
}

export default LoginPage;
