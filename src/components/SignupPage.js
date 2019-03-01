import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { postSignUp, checkEmail, checkUsername } from "../api.js";
import { backButton } from "../images/arrowbackbold.png";

import EditEmail from "./EditEmail";
import AddUsernameAndPsw from "./AddUsernameAndPsw";
import ArrowGoBack from "../images/arrowbackbold.png";

import "./SignupPage.css";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fullName: "",
      email: "",
      originalPassword: "",
      bio: "",
      website: "",
      profilePic: "",
      phoneNumber: "",
      gender: "Prefer not to say",
      emailSubmitted: false,
      fullNameSubmitted: false,
      agreeToTerms: false,
      addPhoto: false
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    postSignUp(this.state).then(response => {
      console.log("sign up result", response.data);
      this.props.signupSuccess(response.data);
      this.setState({ usernameSubmitted: true, passwordSubmitted: true });
    });
  }

  handleEmail(event) {
    event.preventDefault();

    // check if email is already with an account
    // write checkEmail fnc in api.js

    // checkEmail(this.state.email).then(response => {
    //   console.log("email not in use", response.data);
    // });

    // assign tempUsername
    const tempUsername = this.state.email.slice(
      0,
      this.state.email.indexOf("@")
    );
    this.setState({ username: tempUsername, emailSubmitted: true });

    // display next screen (full name & password)
  }

  handleDisplay() {
    if (!this.state.emailSubmitted) {
      return (
        <EditEmail
          checkEmail={event => this.handleEmail(event)}
          updateState={event => this.genericOnChange(event)}
        />
      );
    } else if (this.props.currentUser) {
      return (
        <AddUsernameAndPsw
          updateState={event => this.genericOnChange(event)}
          submitForm={event => this.handleSubmit(event)}
        />
      );
    } else if (!this.state.agreeToTerms) {
      return (
        <div>
          <h1>SCREEN 3</h1>

          <h3>Welcome to Instagram, {this.state.username}!</h3>
          <p>
            Find people to follow and start sharing photos. You can change your
            username anytime.
          </p>
          <Link to="#">Change username</Link>
          <button onClick={this.setState({ agreeToTerms: true })}>Next</button>
          <p>
            By signing up, you agree to our <b>Terms</b>.
          </p>
          <p>
            Learn how we collect, use and share your data in our
            <b> Data Policy</b> and how we use cookies and similar technology in
            our <b>Cookies Policy</b>.
          </p>
        </div>
      );
    } else if (!this.state.addPhoto) {
      return (
        <div>
          <h1>SCREEN 4</h1>
          <p>
            <i>(skipping phone number and connect FB steps)</i>
          </p>
          <p>[icon of person]</p>
          <h4>Add a profile photo</h4>
          <p>Add a profile photo so your friends know it's you.</p>
          <button>Next</button>
          <Link onClick={this.setState({ addPhoto: true })} to="#">
            Skip
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <section className="SignupPage flex">
        <header>
          <img className="goback" src={ArrowGoBack} alt="Arrow Go Back" />
          <p className="gogoback">go back</p>
          <h2>Register</h2>
        </header>
        {this.handleDisplay()}
      </section>
    );
  }
}

export default SignupPage;
