import React, { Component } from "react";

import { Link, Switch, Route } from "react-router-dom";
import { getUserProfileFollowers } from "../../api";
import ProfileRow from "../General/ProfileRow";
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
        // console.log("Profile Details", response.data)
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
    // console.log(this.props.match);
    console.log("Profile User", profileUser);

    console.log("Profile User FOLLOWERS", profileUser.followers);
    console.log("Current User", currentUser);

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
                    Page for followers
                    {profileUser.followers.map(oneFollower => {
                      return (
                        // <div key={oneFollower._id} className="col-4 myCol p-0">
                        <ProfileRow
                          profileUser={oneFollower}
                          currentUser={currentUser}
                          onFollowCurrentUser={this.props.onFollowCurrentUser}
                          key={oneFollower._id}
                        />
                        // </div>
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
                    Page for following
                    {profileUser.following.map(oneFollowing => {
                      return (
                        // <div key={oneFollowing._id} className="col-4 myCol p-0">
                        <ProfileRow
                          profileUser={oneFollowing}
                          currentUser={currentUser}
                          onFollowCurrentUser={this.props.onFollowCurrentUser}
                          key={oneFollowing._id}
                        />
                        // </div>
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
