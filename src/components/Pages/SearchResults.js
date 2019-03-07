import React, { Component } from "react";

import { Link, Switch, Route } from "react-router-dom";

import ProfilePic from "../General/ProfilePic";
import "./SearchResults.css";

class SearchResults extends Component {
  render() {
    const { allUsers } = this.props;
    return (
      <div className="ProfilesList">
        <div>
          {allUsers.map(oneUser => {
            return (
              // <div key={oneFollower._id} className="col-4 myCol p-0">
              <div className="d-flex row m-0">
                <Link
                  to={"/" + oneUser.username}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div>
                    <ProfilePic
                      profilePic={oneUser.profilePic}
                      size="profile-row"
                    />
                  </div>
                </Link>
                <Link
                  to={"/" + oneUser.username}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="username-marg">
                    <div>
                      <b>{oneUser.username}</b>
                    </div>
                    <div className="grey">{oneUser.fullName} </div>
                  </div>
                </Link>
              </div>
              // </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchResults;
