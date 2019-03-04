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
        <header className="d-flex">
          <ProfilePic profilePic={profileUser.profilePic} size="profilePage" />
          <section>
            <div>
              <h1>{profileUser.username}</h1>
              <div>O</div>
            </div>
            {/* IF USER LOGGED IN TO CHANGE THE BUTTON  */}

            <ButtonFollowUnfollow
              profileUser={profileUser}
              currentUser={currentUser}
              onFollowProfile={user => this.updateProfileUser(user)}
              onFollowCurrentUser={user => this.props.onFollowCurrentUser(user)}
            />
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
