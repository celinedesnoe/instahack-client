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
  // updateProfileUser(newUser) {
  //   this.setState({ profileUser: newUser });
  // }

  render() {
    const { profileUser, currentUser } = this.props;
    return (
      <div className="ProfileRow">
        <ProfilePic profilePic={profileUser.profilePic} size="profilePage" />
        {profileUser.username}
        {profileUser.name}
        <ButtonFollowUnfollow
          profileUser={profileUser}
          currentUser={currentUser}
          // onFollowProfile={user => this.props.updateProfileUser(user)}
          // onFollowProfile={user => this.updateProfileUser(user)}
          onFollowCurrentUser={this.props.onFollowCurrentUser}
        />
      </div>
    );
  }
}

export default ProfileRow;
