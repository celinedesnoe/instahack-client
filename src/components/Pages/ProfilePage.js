import React, { Component } from "react";
import { getUserProfile } from "../../api.js";
import { Redirect } from "react-router-dom";

import ProfilePic from "../General/ProfilePic.js";
import ButtonLink from "../General/ButtonLink.js";
import ButtonFollowUnfollow from "../General/ButtonFollowUnfollow.js";
import ProfileStatistics from "../General/ProfileStatistics";
import GridView from "../General/GridView.js";
import HeaderLogged from "../HeadersAndFooters/HeaderLogged.js";
import MiddleNavBar from "../HeadersAndFooters/MiddleNavBar.js";
import TimelineView from "../General/TimelineView.js";

import "./ProfilePage.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUser: {},
      profilePosts: [],
      isLoaded: false,
      gridView: true,
      timelineView: false
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

  switchToGrid(event) {
    this.setState({ gridView: true, timelineView: false });
  }

  switchToTimeline(event) {
    this.setState({ gridView: false, timelineView: true });
  }

  render() {
    const { profileUser, profilePosts } = this.state;
    const { currentUser } = this.props;
    console.log("Current User is", currentUser);
    console.log("Profile User is", profileUser);

    return currentUser ? (
      <div className="ProfilePage">
        <HeaderLogged
          logout={() => this.props.toLogout()}
          text="Profile"
          className="headerprofilelogged"
        />
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
        <MiddleNavBar
          listed={this.state.timelineView}
          greeded={this.state.gridView}
          className="middlenavbarlogged"
          changeToGrid={event => this.switchToGrid(event)}
          changeToTimeline={event => this.switchToTimeline(event)}
        />

        {this.state.gridView ? (
          <GridView profilePosts={profilePosts} />
        ) : (
          profilePosts.map(onePost => {
            return (
              <TimelineView
                className="timeline-post"
                key={onePost._id}
                postInfo={{ match: { params: { postId: onePost._id } } }}
                currentUser={this.props.currentUser}
                // rerouteUrl={this.props.rerouteUrl}
              />
            );
          })

          // <div>TIMELINE VIEW</div>
          // <TimelineView
          //   toLogout={() => this.props.toLogout()}
          //   currentUser={this.state.currentUser}
          // />
        )}
      </div>
    ) : (
      <Redirect exact to="/" />
    );
  }
}

export default ProfilePage;
