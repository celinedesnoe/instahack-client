import React, { Component } from "react";

import "./ProfilePic.css";

class ProfilePic extends Component {
  render() {
    const { profilePic, size } = this.props;

    return (
      <div className="ProfilePic">
        PROFILE PIC
        <img src={profilePic} alt="Profile Pic" className={size} />
      </div>
    );
  }
}

export default ProfilePic;
