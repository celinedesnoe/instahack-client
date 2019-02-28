import React, { Component } from "react";
import "./ProfilePage.css";
import GridView from "./GridView.js";
import { Link } from "react-router-dom";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    };
  }
  render() {
    const { currentUser } = this.state;
    // console.log(currentUser);
    return (
      <div>
        PROFILE PAGE
        <GridView currentUser={currentUser} />
      </div>
    );
  }
}

export default ProfilePage;
