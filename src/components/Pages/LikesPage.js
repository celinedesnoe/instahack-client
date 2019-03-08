import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPostDetails } from "../../api.js";

import HeaderCross from "../HeadersAndFooters/HeaderCross.js";

import ProfilePic from "../General/ProfilePic";
import ButtonFollowUnfollow from "../General/ProfilePic";

import "./LikesPage.css";

class LikesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      likers: []
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    getPostDetails(params.postId)
      .then(response =>
        // console.log("Profile Details", response.data)
        this.setState({
          post: response.data.post,
          likers: response.data.post.likedBy
        })
      )
      .catch(() => {
        alert("Sorry cannot find the details of this profile");
      });
  }

  render() {
    const { likers } = this.state;
    const { currentUser } = this.props;
    // console.log(this.state);
    // console.log("CURRENT USER", currentUser);
    // console.log("PROFILE USER", likers);
    return (
      <div className="ProfilesList">
        <HeaderCross text="Likes" link={`/p/${this.state.post._id}`} />
        <div className="coucou">
          {likers.map(oneLiker => {
            console.log("ONE LIKER", oneLiker, "CURRENT USER", currentUser);
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

                <ButtonFollowUnfollow
                  size="d-flex align-items-center"
                  profileUser={oneLiker}
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

export default LikesPage;
