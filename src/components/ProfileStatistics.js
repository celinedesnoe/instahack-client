import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProfileStatistics.css";
import ProfilesList from "./ProfilesList";

class ProfileStatistics extends Component {
  render() {
    const { profileUser, profilePosts, currentUser } = this.props;
    console.log(currentUser);
    return (
      <div className="ProfileStatistics">
        <div>{profilePosts.length} posts</div>

        {/* NEED  TO CHECK IF THERE IS FOLLOWING USERS TO AVOID ERROR */}
        {profileUser.following && profileUser.following.length > 0 && (
          <Link to={"/" + profileUser.username + "/following"}>
            <div>{profileUser.following.length} following</div>
          </Link>
        )}

        {profileUser.following && profileUser.following.length === 0 && (
          <div>No following</div>
        )}

        {/* NEED  TO CHECK IF THERE IS FOLLOWER USERS TO AVOID ERROR */}

        {profileUser.followers && profileUser.followers.length > 0 && (
          <Link to={"/" + profileUser.username + "/followers"}>
            <div>{profileUser.followers.length} followers</div>
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
