import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProfileStatistics.css";
// import ProfilesList from "./ProfilesList";

class ProfileStatistics extends Component {
  render() {
    const { profileUser, profilePosts, currentUser } = this.props;
    // console.log(currentUser);
    return (
      <div className="ProfileStatistics d-flex flex-row">
        <div>
          <b>{profilePosts.length}</b> <br />
          posts
        </div>

        {/* NEED  TO CHECK IF THERE IS FOLLOWING USERS TO AVOID ERROR */}
        {profileUser.following && profileUser.following.length > 0 && (
          <Link to={"/" + profileUser.username + "/following"}>
            <div>
              <b>{profileUser.following.length}</b> <br />
              following
            </div>
          </Link>
        )}

        {profileUser.following && profileUser.following.length === 0 && (
          <div>No following</div>
        )}

        {/* NEED  TO CHECK IF THERE IS FOLLOWER USERS TO AVOID ERROR */}

        {profileUser.followers && profileUser.followers.length > 0 && (
          <Link to={"/" + profileUser.username + "/followers"}>
            <div>
              <b>{profileUser.followers.length}</b> <br />
              followers
            </div>
          </Link>
        )}

        {profileUser.followers && profileUser.followers.length === 0 && (
          <div>No followers</div>
        )}
      </div>
    );
  }
}

export default ProfileStatistics;
