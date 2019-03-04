import React, { Component } from "react";

import { Link } from "react-router-dom";
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

  updateProfileUser(newUser) {
    this.setState({ profileUser: newUser });
  }

  render() {
    const { profileUser } = this.state;
    const { currentUser } = this.props;
    // console.log(this.props.match);
    console.log("Profile User", profileUser);
    console.log("Profile User FOLLOWERS", profileUser.followers);

    console.log("Current User", currentUser);
    return (
      <div>
        {/************ FOR FOLLOWERS PAGE *************/}
        {this.props.match.path === "/:username/followers" &&
          (profileUser.followers && (
            <div>
              Page for followers
              {profileUser.followers.map(oneFollower => {
                return (
                  <div key={oneFollower._id} className="col-4 myCol p-0">
                    <ProfileRow
                      profileUser={oneFollower}
                      currentUser={currentUser}
                      onFollowCurrentUser={user =>
                        this.props.onFollowCurrentUser(user)
                      }
                      onFollowProfile={user => this.updateProfileUser(user)}
                    />
                  </div>
                );
              })}
            </div>
          ))}

        {/************ FOR FOLLOWING PAGE *************/}
        {this.props.match.path === "/:username/following" &&
          (profileUser.following && (
            <div>
              Page for followers
              {profileUser.following.map(oneFollowing => {
                return (
                  <div key={oneFollowing._id} className="col-4 myCol p-0">
                    <ProfileRow
                      profileUser={oneFollowing}
                      currentUser={currentUser}
                    />
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    );
  }
}

export default ProfilesList;
