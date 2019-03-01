import React, { Component } from "react";
import { getUserProfile } from "../api";
import { Link } from "react-router-dom";

import ProfilePic from "./ProfilePic.js";
import GridView from "./GridView.js";

import "./ProfilePage.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUser: {},
      profilePosts: []
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    getUserProfile(params.username)
      .then(response =>
        // console.log("Profile Details", response.data)
        this.setState({
          profileUser: response.data.userDoc,
          profilePosts: response.data.postResults
        })
      )
      .catch(() => {
        alert("Sorry cannot find the details of this profile");
      });
  }

  render() {
    const { profileUser, profilePosts } = this.state;
    // console.log("The user profile from profile page", profileUser);
    // console.log("The posts form the user on profile page are: ", profilePosts);

    return (
      <div className="GridView">
        <ProfilePic profilePic={profileUser.profilePic} size="profilePage" />
        PROFILE PAGE of {profileUser.username}
        <GridView profilePosts={profilePosts} />
      </div>
    );
  }
}

export default ProfilePage;
