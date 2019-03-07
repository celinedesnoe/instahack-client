import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { postPicture } from "../../api.js";

import profileperson from "../../images/roundprofileline.png";
import TakePhotoPage from "../Pages/TakePhotoPage.js";

import "./EditProfilePhoto.css";

class EditProfilePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  uploadChange(event) {
    const { name, files } = event.target;
    postPicture(files[0]).then(response => {
      // this.setState({ [name]: response.data.fileUrl });
      this.props.addPhoto(response.data.fileUrl);
    });
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

          <div className="upload-btn-wrapper">
            <input
              class="edit-button"
              type="file"
              onChange={event => this.uploadChange(event)}
              name="profilePic"
            />
            Next
          </div>
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
