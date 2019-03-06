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

import ProfileStatistics from "../General/ProfileStatistics";
import GridView from "../General/GridView.js";

import "./ProfilePage.css";
import TakePhotoPage from "./TakePhotoPage.js";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUser: {},
      profilePosts: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    getUserProfile(params.username)
      .then(response =>
        // console.log("Profile Details", response.data)
        this.setState({
          profileUser: response.data.userDoc,
          profilePosts: response.data.postResults,
          isLoaded: true
        })
      )
      .catch(() => {
        alert("Sorry cannot find the details of this profile");
      });
  }

  updateProfileUser(newUser) {
    this.setState({ profileUser: newUser });
  }

  render() {
    const { profileUser, profilePosts } = this.state;
    const { currentUser } = this.props;
    console.log("Current User is", currentUser);
    console.log("Profile User is", profileUser);

    return (
      <div className="ProfilePage">
        <header className="d-flex headerprofilepage">
          <span className="profile-pic">
            <ProfilePic
              profilePic={profileUser.profilePic}
              size="profile-page"
            />
          </span>

          <section className="w-70">
            <div className="d-flex username-settings">
              <h1 className="profileusername">{profileUser.username}</h1>
            </div>
            {/* BUTTON EDIT PROFILE */}

            {profileUser._id === currentUser._id && (
              <div className="w-90">
                <ButtonLink
                  styling="white-button"
                  link="/accounts/edit"
                  text="Edit Profile"
                />
              </div>
            )}

            {/* BUTTON FOLLOW UNFOLLOW  */}
            <span className="d-flex justify-content-start button">
              <ButtonFollowUnfollow
                size="w-90"
                profileUser={profileUser}
                currentUser={currentUser}
                onFollowProfile={user => this.updateProfileUser(user)}
                onFollowCurrentUser={user =>
                  this.props.onFollowCurrentUser(user)
                }
              />
            </span>
          </section>
        </header>
        <div className="name-bio">
          <span>
            <b>{profileUser.fullName}</b>
          </span>
          <br />
          <span>{profileUser.bio}</span>
        </div>

        <ProfileStatistics
          profileUser={profileUser}
          profilePosts={profilePosts}
          currentUser={currentUser}
        />

        <GridView profilePosts={profilePosts} />
      </div>
    );
  }
}

export default ProfilePage;
