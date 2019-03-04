import React, { Component } from "react";
import { Link } from "react-router-dom";

import circlephone from "../../images/roundphoneline.png";

import "./AddPhoneNumber.css";

class EditProfilePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="EditPhoneNumber">
        <div className="helptheskip">
          <img
            src={circlephone}
            alt="phone in a circle"
            className="circlephone"
          />
          <h4 className="addprofilephoto">Add phone number</h4>
          <p className="soyourfriends">
            Adding your number will help you log in more easily, recover your
            account, and find people to follow.
          </p>
          <input type="Number" placeholder="Phone Number" />
          <button
            onClick={event => this.props.addPhoto(event)}
            className="blue-button"
          >
            Add phone number
          </button>{" "}
        </div>
        <Link
          onClick={event => this.props.addPhoto(event)}
          to="#"
          className="skip"
        >
          Skip
        </Link>
        <p className="youmayreceive">
          You may receive SMS updates from Instagram and can opt out at anytime.
        </p>
      </div>
    );
  }
}

export default EditProfilePhoto;
