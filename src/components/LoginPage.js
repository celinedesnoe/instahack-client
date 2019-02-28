import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import "./LoginPage.css";
// import { postLogIn } from "../api";

import ButtonLink from "./ButtonLink.js";

import ButtonSubmit from "./ButtonSubmit.js";

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

  // handleSubmit(event) {
  //   event.preventDefault();

  //   //submit login info to the back-end...
  //   postLogIn(this.state).then(response => {
  //     console.log("Log In", response.data);
  //     this.props.loginSuccess(response.data);
  //   });
  // }

  render() {
    return (
      <div>
        LOG IN PAGE
        <div>
          <img src="./images/Instagram_logo.png" />
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
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.email || this.state.username}
            name={"username" || "email"}
            type="text"
            placeholder="Username or email"
          />
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.originalPassword}
            name="password"
            type="text"
            placeholder="Password"
          />
          <ButtonSubmit text="Log In" styling="white-button" />
        </form>
        <a href="#">Forgot password?</a>
      </div>
    );
  }
}

export default LoginPage;
