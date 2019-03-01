import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditProfilePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="EditProfilePhoto">
        <h1>SCREEN 4</h1>
        <p>
          <i>(skipping phone number and connect FB steps)</i>
        </p>
        <p>[icon of person]</p>
        <h4>Add a profile photo</h4>
        <p>Add a profile photo so your friends know it's you.</p>
        <button onClick={event => this.props.addPhoto(event)}>Next</button>
        <Link onClick={event => this.props.addPhoto(event)} to="#">
          Skip
        </Link>
      </div>
    );
  }
}

export default EditProfilePhoto;
