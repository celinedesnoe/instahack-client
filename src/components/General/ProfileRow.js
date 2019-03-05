import React, { Component } from "react";
import {
  getUserProfile,
  getUserToUnfollow,
  getUserToFollow
} from "../../api.js";

import { Link, Route } from "react-router-dom";
import ProfilePic from "../General/ProfilePic.js";
import ButtonSubmit from "../General/ButtonSubmit.js";
import ButtonLink from "../General/ButtonLink.js";
import ButtonFollowUnfollow from "../General/ButtonFollowUnfollow.js";

import "./ProfileRow.css";

class ProfileRow extends Component {
  render() {
    const { profileUser, currentUser } = this.props;
    return (
      <div className="ProfileRow d-flex row justify-content-between">
        <Link
          to={"/" + profileUser.username}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div>
            <ProfilePic
              profilePic={profileUser.profilePic}
              size="profile-row"
            />
          </div>
        </Link>
        <Link
          to={"/" + profileUser.username}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="">
            <div>{profileUser.username}</div>
            <div>{profileUser.fullName} </div>
          </div>
        </Link>

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
