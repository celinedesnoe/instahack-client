import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProfileStatistics.css";

class ProfileStatistics extends Component {
  render() {
    const { profileUser, profilePosts } = this.props;
    // console.log(currentUser);
    return (
      <div className="ProfileStatistics d-flex flex-row justify-content-around align-items-center">
        <div className="text-center">
          <b>{profilePosts.length}</b> <br />
          <span>posts</span>
        </div>

        {/* NEED  TO CHECK IF THERE IS FOLLOWING USERS TO AVOID ERROR */}
        {profileUser.following && profileUser.following.length > 0 && (
          <Link
            to={`/${profileUser.username}/following`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="text-center">
              <b>{profileUser.following.length}</b> <br />
              <span>following</span>
            </div>
          </Link>
        )}

        {profileUser.following && profileUser.following.length === 0 && (
          <div className="text-center">
            <b>0</b> <br />
            <span>following</span>
          </div>
        )}

        {/* NEED  TO CHECK IF THERE IS FOLLOWER USERS TO AVOID ERROR */}

        {profileUser.followers && profileUser.followers.length > 0 && (
          <Link
            to={`/${profileUser.username}/followers`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="text-center">
              <b>{profileUser.followers.length}</b> <br />
              <span>followers</span>
            </div>
          </Link>
        )}

        {profileUser.followers && profileUser.followers.length === 0 && (
          <div className="text-center">
            <b>0</b> <br />
            <span>followers</span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatistics;
