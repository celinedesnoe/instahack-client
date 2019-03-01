import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProfileStatistics.css";

class ProfileStatistics extends Component {
  render() {
    const { profileUser, profilePosts } = this.props;
    console.log("The posts for the statistics is", profilePosts);
    console.log("Following", profileUser.following);
    console.log("Followers", profileUser.followers);
    console.log("Followers", profileUser.followers);
    return (
      <div className="ProfileStatistics">
        <div>{profilePosts.length} posts</div>
        {profileUser.following ? (
          <div>{profileUser.following.length} following</div>
        ) : (
          <div> 0 following </div>
        )}
        {profileUser.following ? (
          <div>{profileUser.followers.length} following</div>
        ) : (
          <div> 0 followers </div>
        )}
      </div>
    );
  }
}

export default ProfileStatistics;
