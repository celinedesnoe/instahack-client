import React, { Component } from "react";

import "./SignupPage.css";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      encryptedPassword: "",
      bio: "",
      website: "",
      profilePic: "",
      phoneNumber: null,
      gender: ""
    };
  }

  render() {
    return <div>SIGN UP PAGE</div>;
  }
}

export default SignupPage;
