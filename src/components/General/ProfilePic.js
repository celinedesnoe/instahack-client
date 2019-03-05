import React, { Component } from "react";

import "./ProfilePic.css";

class ProfilePic extends Component {
  render() {
    const { profilePic, size } = this.props;

    return (
      <div className={`ProfilePic ${size}`}>
        <img src={profilePic} alt="ProfilePic" className="img-in-circle" />
      </div>
    );
  }
}

export default ProfilePic;
