import React, { Component } from "react";
import { getUserProfile, getUserToUnfollow, getUserToFollow } from "../api";
import { Link } from "react-router-dom";

import ProfilePic from "./ProfilePic.js";
import ButtonSubmit from "./ButtonSubmit.js";
import ButtonLink from "./ButtonLink.js";
import ProfileStatistics from "./ProfileStatistics";
import GridView from "./GridView.js";

import "./ProfilePage.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUser: {},
      profilePosts: [],
      currentUser: this.props.currentUser
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

  buttonFollowUnfollow() {
    const { profileUser, currentUser } = this.state;
    if (profileUser._id === currentUser._id) {
      return (
        <div>
          <ButtonLink
            styling="white-button"
            link="/accounts/edit"
            text="Edit Profile"
          />
        </div>
      );
    }

    if (profileUser.username) {
      console.log("USERNAME", profileUser.username);
      if (currentUser.following.includes(profileUser._id)) {
        return (
          <div>
            <ButtonSubmit
              styling="blue-button"
              link=""
              text="Unfollow"
              onClick={() => this.unfollowClick()}
            />
          </div>
        );
      } else {
        return (
          <div>
            <ButtonSubmit
              styling="blue-button"
              link=""
              text="Follow"
              onClick={() => this.followClick()}
            />
          </div>
        );
      }
    } else {
      return <div>Loading</div>;
    }
  }

  unfollowClick() {
    getUserToUnfollow(this.state)
      .then(response =>
        this.setState({
          currentUser: response.data.currentUserDoc,
          profileUser: response.data.profileUserDoc
        })
      )
      .catch(() => {
        alert("Sorry cannot cannot unfollow the profile");
      });
  }

  followClick() {
    getUserToFollow(this.state)
      .then(response => {
        this.setState({
          currentUser: response.data.currentUserDoc,
          profileUser: response.data.profileUserDoc
        });
      })
      .catch(() => {
        alert("Sorry cannot cannot unfollow the profile");
      });
  }

  render() {
    const { profileUser, profilePosts, currentUser } = this.state;
    console.log("Current User is", currentUser);
    console.log("Profile User is", profileUser);
    console.log("Profile User is", profileUser._id);

    return (
      <div className="ProfilePage">
        <header className="d-flex">
          <ProfilePic profilePic={profileUser.profilePic} size="profilePage" />
          <section>
            <div>
              <h1>{profileUser.username}</h1>
              <div>O</div>
            </div>
            {/* CONDITION IF USER LOGGED IN TO CHANGE THE BUTTON IN HEADER  */}

            {this.buttonFollowUnfollow()}

            {/* {profileUser._id === currentUser._id ? (
              <div>
                <ButtonLink
                  styling="white-button"
                  link="/accounts/edit"
                  text="Edit Profile"
                />
              </div>
            ) : // CONDITION TO CHECK IF CURRENT USER FOLLOW OR NOT THIS PROFILE PAGE
            profileUser._id &&
              currentUser.following.includes(profileUser._id) ? (
              <div>
                <ButtonSubmit
                  styling="blue-button"
                  link=""
                  text="Unfollow"
                  onClick={() => this.unfollowClick()}
                />
              </div>
            ) : (
              <div>
                <ButtonSubmit
                  styling="blue-button"
                  link=""
                  text="Follow"
                  onClick={() => this.followClick()}
                />
              </div>
            )} */}
          </section>
        </header>
        <div>
          <p>{profileUser.fullName}</p>
          <p>{profileUser.bio}</p>
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
