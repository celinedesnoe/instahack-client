import React, { Component } from "react";

import { Link } from "react-router-dom";
import { getPostDetails } from "../../api.js";
import ProfilePic from "../General/ProfilePic";
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
          post: response.data
        })
      )
      .catch(() => {
        alert("Sorry cannot find the details of this profile");
      });
  }

  render() {
    const { post } = this.state;
    return (
      <div className="ProfilesList">
        {/* <div>
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
        </div> */}
      </div>
    );
  }
}

export default LikesPage;
