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
      allUsers: [],
      shuffleUsers: []
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
    this.setState({ shuffleUsers: this.shuffle(this.state.allUsers) });
  }

  shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    console.log(this.state);
    const { currentUser } = this.props;
    const { shuffleUsers, allUsers } = this.state;
    return (
      <div className="ProfilesList">
        <div>
          {allUsers.map(oneLiker => {
            return (
              <div className="ProfileRow d-flex row justify-content-between">
                <div className="d-flex row m-0">
                  <Link
                    to={"/" + oneLiker.username}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div>
                      <ProfilePic
                        profilePic={oneLiker.profilePic}
                        size="profile-row"
                      />
                    </div>
                  </Link>
                  <Link
                    to={"/" + oneLiker.username}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="username-marg">
                      <div>
                        <b>{oneLiker.username}</b>
                      </div>
                      <div className="grey">{oneLiker.fullName} </div>
                    </div>
                  </Link>
                </div>

                {/* <ButtonFollowUnfollow
                  size="d-flex align-items-center"
                  profileUser={oneLiker}
                  currentUser={currentUser}
                  onFollowCurrentUser={this.props.onFollowCurrentUser}
                /> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NewsfeedEmptyPage;
