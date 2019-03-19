import React, { Component } from "react";

import { Link } from "react-router-dom";

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
              <div className="ProfileRow d-flex row justify-content-between">
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
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchResults;
