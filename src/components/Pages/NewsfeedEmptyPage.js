import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../General/ProfilePic";
import ButtonFollowUnfollow from "../General/ButtonFollowUnfollow";
import { getNewsfeedEmpty } from "../../api.js";
import "./NewsfeedEmptyPage.css";

class NewsfeedEmptyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: []
      // shuffleUsers: []
    };
  }

  componentDidMount() {
    getNewsfeedEmpty()
      .then(response =>
        // console.log("Profile Details", response.data)
        this.setState({
          allUsers: response.data
        })
      )
      .catch(() => {
        alert("Sorry cannot find all the users for the empty newsfeed ");
      });
  }

  render() {
    console.log(this.state);
    console.log("CURRENT USER", this.props);
    const { currentUser } = this.props;
    const { allUsers } = this.state;
    return (
      <div className="ProfilesList">
        <div className="welcome">
          <p>Welcome to Instagram!</p>
          <p>Suggested accounts to follow:</p>
        </div>
        <div>
          {allUsers.map(oneUser => {
            console.log("ONE USER", oneUser);
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

                <ButtonFollowUnfollow
                  size="d-flex align-items-center"
                  profileUser={oneUser}
                  currentUser={currentUser}
                  onFollowCurrentUser={this.props.onFollowCurrentUser}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NewsfeedEmptyPage;
