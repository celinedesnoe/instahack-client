import React, { Component } from "react";
import { getUserProfile } from "../api";
import { Link } from "react-router-dom";

import ProfilePic from "./ProfilePic.js";
import ButtonLink from "./ButtonLink.js";
import ProfileStatistics from "./ProfileStatistics";
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
    const { currentUser } = this.props;
    // console.log("The user profile from profile page", profileUser);
    // console.log("The posts form the user on profile page are: ", profilePosts);

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

            {profileUser._id === currentUser._id ? (
              <div>
                <ButtonLink
                  styling="white-button"
                  link="/accounts/edit"
                  text="Edit Profile"
                />
              </div>
            ) : (
              <div>
                <ButtonLink
                  styling="blue-button"
                  link=""
                  text="Follow or Unfollow"
                />
              </div>
            )}
          </section>
        </header>
        <div>
          <p>{profileUser.fullName}</p>
          <p>{profileUser.bio}</p>
        </div>

        <ProfileStatistics
          profileUser={profileUser}
          profilePosts={profilePosts}
        />

        <GridView profilePosts={profilePosts} />
      </div>
    );
  }
}

export default ProfilePage;
