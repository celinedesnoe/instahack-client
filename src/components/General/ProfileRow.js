import React, { Component } from "react";
import {
  getUserProfile,
  getUserToUnfollow,
  getUserToFollow
} from "../../api.js";

import { Link } from "react-router-dom";
import ProfilePic from "../General/ProfilePic.js";
import ButtonSubmit from "../General/ButtonSubmit.js";
import ButtonLink from "../General/ButtonLink.js";
import ButtonFollowUnfollow from "../General/ButtonFollowUnfollow.js";

import "./ProfileRow.css";

class ProfileRow extends Component {
  render() {
    const { profileUser, currentUser } = this.props;
    return (
      <div className="ProfileRow">
        <ProfilePic profilePic={profileUser.profilePic} size="profile-page" />
        {profileUser.username}
        {profileUser.name}
        <ButtonFollowUnfollow
          profileUser={profileUser}
          currentUser={currentUser}
          onFollowCurrentUser={this.props.onFollowCurrentUser}
        />
      </div>
    );
  }
}

export default ProfileRow;
