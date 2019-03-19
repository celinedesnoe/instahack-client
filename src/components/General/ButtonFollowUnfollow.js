import React, { Component } from "react";
import { getUserToUnfollow, getUserToFollow } from "../../api.js";
import ButtonSubmit from "../General/ButtonSubmit.js";
import "./ButtonFollowUnfollow.css";

class ButtonFollowUnfollow extends Component {
  // FUNCTION TO DETERMINE IF BUTTON IS "UNFOLLOW" OR "FOLLOW"
  buttonFollowUnfollow() {
    const { profileUser } = this.props;
    const { currentUser } = this.props;

    // DON'T MAKE THE BUTTON FOLLOW/UNFOLLOW ON ITS OWN PROFILE
    if (profileUser._id === currentUser._id) {
      return null;
    }

    // CHECK IF THE CURRENT USER FOLLOW THE PROFILE
    // IF SO, BUTTON "UNFOLLOW"
    // IF NOT, BUTTON "FOLLOW"
    if (profileUser) {
      if (currentUser.following.includes(profileUser._id)) {
        return (
          <div>
            <ButtonSubmit
              styling="white-button "
              link=""
              text="Following"
              onClick={() => this.unfollowClick()}
            />
          </div>
        );
      } else {
        return (
          <div>
            <ButtonSubmit
              styling="blue-button "
              link=""
              text="Follow"
              onClick={() => this.followClick()}
            />
          </div>
        );
      }
    } else {
      return <div>Loading</div>;
    }
  }

  // WHEN BUTTON "UNFOLLOW" CLICKED,
  unfollowClick() {
    // UPDATE IN THE BACK-END THE CURRENT USER AND PROFILE USER
    // (Remove the profile user in the following of current user)
    // (Remove the current user in the followers of profile user)
    // CHANGE THE STATE OF CURRENT USER AND PROFILE USER
    getUserToUnfollow(this.props.profileUser)
      .then(response => {
        // update the state of the profile user if we are on its page to update automatically the stats
        if (this.props.onFollowProfile) {
          this.props.onFollowProfile(response.data.profileUserDoc);
        }
        this.props.onFollowCurrentUser(response.data.currentUserDoc);
      })
      .catch(err => {
        alert("Sorry cannot cannot unfollow the profile");
      });
  }

  // WHEN BUTTON "FOLLOW" CLICKED,
  followClick() {
    // UPDATE IN THE BACK-END THE CURRENT USER AND PROFILE USER
    // (Add the profile user in the following of current user)
    // (Add the current user in the followers of profile user)
    // CHANGE THE STATE OF CURRENT USER AND PROFILE USER
    getUserToFollow(this.props.profileUser)
      .then(response => {
        // update the state of the profile user if we are on its page to update automatically the stats
        if (this.props.onFollowProfile) {
          this.props.onFollowProfile(response.data.profileUserDoc);
        }
        this.props.onFollowCurrentUser(response.data.currentUserDoc);
      })
      .catch(err => {
        alert("Sorry cannot cannot follow the profile");
      });
  }

  render() {
    return <div className={this.props.size}>{this.buttonFollowUnfollow()}</div>;
  }
}

export default ButtonFollowUnfollow;
