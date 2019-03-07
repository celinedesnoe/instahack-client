import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { postSignUp, checkEmail, checkUsername } from "../../api.js";

import HeaderInstagram from "../HeadersAndFooters/HeaderInstagram";
import HeaderArrowBack from "../HeadersAndFooters/HeaderArrowBack";
// import Header from "./Header";
import FooterFbBlue from "../HeadersAndFooters/FooterFbBlue";
import FooterNext from "../HeadersAndFooters/FooterNext";
import EditEmail from "../EditAccount/EditEmail";
import AddUsernameAndPsw from "../EditAccount/AddUsernameAndPsw";
import TermsAndConditions from "../Pages/TermsAndConditionsPage";
import MoreThanEighteen from "../Pages/MoreThanEighteenPage";
import ConnectToFacebook from "../Pages/ConnectToFacebookPage";
import EditProfilePhoto from "../EditAccount/EditProfilePhoto";
import AddPhoneNumber from "../EditAccount/AddPhoneNumber";

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
      profilePic:
        "https://scontent-frx5-1.cdninstagram.com/vp/973f5d72a5217d4b771ed4a941e6f138/5D0566F1/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com",
      phoneNumber: "",
      gender: "Prefer not to say",
      emailSubmitted: false,
      fullNameSubmitted: false,
      agreeToTerms: false,
      moreThanEighteen: false,
      connectToFacebook: false,
      addPhoto: false,
      addPhoneNumber: false
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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

  handleSubmit(event) {
    event.preventDefault();

    postSignUp(this.state).then(response => {
      console.log("sign up result", response.data);
      this.props.signupSuccess(response.data);
      this.setState({ addPhoneNumber: true });
    });
  }

  handlefullNameSubmitted(event) {
    this.setState({ fullNameSubmitted: true, passwordSubmitted: true });
  }

  handleAgree(event) {
    this.setState({ agreeToTerms: true });
  }

  handleOlder(event) {
    this.setState({ moreThanEighteen: true });
  }

  handleConnectFacebook(event) {
    this.setState({ connectToFacebook: true });
  }

  handleProfilePhoto(pic) {
    this.setState({ addPhoto: true, profilePic: pic });
  }

  handlePhoneNumber(event) {
    this.setState({ addPhoneNumber: true });
  }

  render() {
    return (
      <section className="SignupPage flex">
        {/* <HeaderArrowBack text="Register" link="/accounts/signup" /> */}

        {this.state.emailSubmitted ? (
          // emailSubmitted is true
          // check if user has submitted their name/psw
          this.state.fullNameSubmitted ? (
            // emaillSubmitted & fullNameSubmitted are true
            // check if user has agreed to terms
            this.state.agreeToTerms ? (
              // emailSubmitted, fullNameSubmitted, & agreeToTerms are true
              // check if the user is less or more than 18
              this.state.moreThanEighteen ? (
                // emailSubmitted, fullNameSubmitted, agreeToTerms & moreThanEighteen are true
                // check if the user wants to connect with facebook
                this.state.connectToFacebook ? (
                  // emailSubmitted, fullNameSubmitted, agreeToTerms, moreThanEighteen & ConnectToFacebook are true
                  // check if user has added a profile pic
                  this.state.addPhoto ? (
                    // emailSubmitted, fullNameSubmitted, agreeToTerms, moreThanEighteen, ConnectToFacebook & addPhoto are true
                    // check if user has added a number
                    this.state.addPhoneNumber ? (
                      // signup is complete and the user goes to newsfeed
                      <Redirect to={`/`} />
                    ) : (
                      <div className="AddPhoneNumber">
                        <HeaderInstagram text="" link="/" />
                        <AddPhoneNumber
                          addNumber={event => this.handlePhoneNumber(event)}
                          submitForm={event => this.handleSubmit(event)}
                        />
                      </div>
                    )
                  ) : (
                    // emailSubmitted, fullNameSubmitted, & agreeToTerms are true
                    // addPhoto is false
                    // show user the screen to add a profile photo
                    <div className="AddPhoto">
                      <HeaderInstagram text="" link="/" />
                      <EditProfilePhoto
                        addPhoto={pic => this.handleProfilePhoto(pic)}
                      />
                    </div>
                  )
                ) : (
                  //
                  <div className="ConnectToFacebook">
                    <HeaderInstagram text="" link="/" />
                    <ConnectToFacebook
                      addPhoto={event => this.handleConnectFacebook(event)}
                    />
                  </div>
                )
              ) : (
                // emailSubmitted, fullNameSubmitted, & agreeToTerms are true
                // MoreThanEighteen is false
                // show user the screen to check if more than 18
                <div className="MoreThanEighteen">
                  {/* <HeaderAge text="" link="/" /> */}
                  <MoreThanEighteen
                    ageStatus={event => this.handleOlder(event)}
                  />
                  <FooterNext />
                </div>
              )
            ) : (
              // emailSubmitted & fullNameSubmitted are true
              // agreeToTerms is false
              // show terms
              <div className="TermsConditionsPage">
                <HeaderArrowBack text="Register" link="/accounts/signup" />
                <TermsAndConditions
                  un={this.state.username}
                  hasAgreed={event => this.handleAgree(event)}
                />
              </div>
            )
          ) : (
            // emailSubmitted is true
            // fullNameSubmitted is false
            // show form to add full name and password
            <div className="AddUsernamePage">
              <HeaderArrowBack text="Register" link="/accounts/signup" />
              <AddUsernameAndPsw
                updateState={event => this.genericOnChange(event)}
                handlefullNameSubmitted={event =>
                  this.handlefullNameSubmitted(event)
                }
              />
            </div>
          )
        ) : (
          //  emailSubmitted is false: show EditEmail form
          <div className="emailPage">
            <HeaderArrowBack text="Register" link="/accounts/signup" />
            <EditEmail
              checkEmail={event => this.handleEmail(event)}
              updateState={event => this.genericOnChange(event)}
              className="EditEmail"
            />
            <FooterFbBlue
              text="Sign up with Facebook"
              link="https://www.facebook.com"
            />
          </div>
        )}
      </section>
    );
  }
}

export default SignupPage;
