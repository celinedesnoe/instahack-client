import React, { Component } from "react";

import { Link } from "react-router-dom";
import ProfilePic from "../General/ProfilePic.js";

import ButtonFollowUnfollow from "../General/ButtonFollowUnfollow.js";

import "./ProfileRow.css";

class ProfileRow extends Component {
  render() {
    const { profileUser, currentUser } = this.props;
    return (
      <div className="ProfileRow d-flex row justify-content-between">
        <div className="d-flex row m-0">
          <Link
            to={"/" + profileUser.username}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <ProfilePic
                profilePic={profileUser.profilePic}
                size="profile-row2"
              />
            </div>
          </Link>
          <Link
            to={"/" + profileUser.username}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="username-marg">
              <div>
                <b>{profileUser.username}</b>
              </div>
              <div className="grey">{profileUser.fullName} </div>
            </div>
          </Link>
        </div>
        <ButtonFollowUnfollow
          size="d-flex align-items-center"
          profileUser={profileUser}
          currentUser={currentUser}
          onFollowCurrentUser={this.props.onFollowCurrentUser}
        />
      </div>
    );
  }
}

export default ProfileRow;
