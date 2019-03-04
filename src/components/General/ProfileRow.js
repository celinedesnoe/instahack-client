import React, { Component } from "react";

import { Link } from "react-router-dom";
import ProfilePic from "../General/ProfilePic.js";

import "./ProfileRow.css";

class ProfileRow extends Component {
  render() {
    const { profileUserRow, currentUser } = this.props;
    return (
      <div className="ProfileRow">
        <ProfilePic profilePic={profileUserRow.profilePic} size="profilePage" />
        {profileUserRow.username}
        {profileUserRow.name}
      </div>
    );
  }
}

export default ProfileRow;
