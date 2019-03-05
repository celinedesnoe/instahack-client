import React, { Component } from "react";
import { Link } from "react-router-dom";

import profileperson from "../../images/roundprofileline.png";

import "./EditProfilePhoto.css";

class EditProfilePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="EditProfilePhoto">
        <div className="helptheskip">
          <img
            src={profileperson}
            alt="person in a circle"
            className="profileperson1"
          />
          <h4 className="addprofilephoto1">Add a profile photo</h4>
          <p className="soyourfriends1">
            Add a profile photo so your friends know it's you.
          </p>
          <button
            onClick={event => this.props.addPhoto(event)}
            className="blue-button"
          >
            Next
          </button>
        </div>
        <Link
          onClick={event => this.props.addPhoto(event)}
          to="#"
          className="skip2"
        >
          Skip
        </Link>
      </div>
    );
  }
}

export default EditProfilePhoto;
