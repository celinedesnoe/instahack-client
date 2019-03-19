import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { getUserProfileFollowers } from "../../api";

import ProfileRow from "../General/ProfileRow.js";
import HeaderFollow from "../HeadersAndFooters/HeaderFollow.js";

import "./ProfilesList.css";

class ProfilesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUser: {}
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    getUserProfileFollowers(params.username)
      .then(response =>
        this.setState({
          profileUser: response.data.userDoc
        })
      )
      .catch(() => {
        alert("Sorry cannot find the details of this profile");
      });
  }

  render() {
    const { profileUser } = this.state;
    const { currentUser } = this.props;
    return (
      <div className="ProfilesList">
        <Switch>
          {/************ FOR FOLLOWERS PAGE *************/}
          {profileUser.followers && (
            <Route
              path="/:username/followers"
              render={() => {
                return (
                  <div>
                    <HeaderFollow text="Followers" />
                    {profileUser.followers.map(oneFollower => {
                      return (
                        <ProfileRow
                          profileUser={oneFollower}
                          currentUser={currentUser}
                          onFollowCurrentUser={this.props.onFollowCurrentUser}
                          key={oneFollower._id}
                          className="profileraw"
                        />
                      );
                    })}
                  </div>
                );
              }}
            />
          )}

          {/************ FOR FOLLOWING PAGE *************/}
          {profileUser.following && (
            <Route
              path="/:username/following"
              render={() => {
                return (
                  <div>
                    <HeaderFollow text="Following" />
                    {profileUser.following.map(oneFollowing => {
                      return (
                        <ProfileRow
                          profileUser={oneFollowing}
                          currentUser={currentUser}
                          onFollowCurrentUser={this.props.onFollowCurrentUser}
                          key={oneFollowing._id}
                          className="profileraw"
                        />
                      );
                    })}
                  </div>
                );
              }}
            />
          )}
        </Switch>
      </div>
    );
  }
}

export default ProfilesList;
