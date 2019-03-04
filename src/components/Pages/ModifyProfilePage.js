import React, { Component } from "react";

import { Link } from "react-router-dom";
import ProfilePic from "../General/ProfilePic.js";

import { editUser } from "../../api.js";
import ButtonSubmit from "../General/ButtonSubmit.js";

class ModifyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: this.props.currentUser.fullName,
      username: this.props.currentUser.username,
      website: this.props.currentUser.website,
      bio: this.props.currentUser.bio,
      email: this.props.currentUser.email,
      phoneNumber: this.props.currentUser.phoneNumber,
      gender: this.props.currentUser.gender
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const updatedUser = {
      newInfo: this.state,
      oldInfo: this.props.currentUser
    };

    editUser(updatedUser).then(response => {
      console.log("edit result", response.data);
      this.props.editSuccess(response.data);
    });
  }

  render() {
    const { currentUser } = this.props;
    const { profilePic } = this.props.currentUser;

    return (
      <section className="ModifyProfile">
        <header className="PageHeader">
          <img className="#" src="#" />
          <h2>Edit Profile</h2>
        </header>
        <div>
          <ProfilePic profilePic={profilePic} size="profile-page" />

          {/* <img className="user-thumbnail" src={currentUser.profilePic} /> */}
          <h3>{currentUser.username}</h3>
          <Link to="#">Change Profile Photo</Link>
        </div>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label className="name">
            <p>Name</p>
            <input
              onChange={event => this.genericOnChange(event)}
              type="text"
              name="fullName"
              value={this.state.fullName}
            />
          </label>
          <label className="username">
            <p>Username</p>
            <input
              onChange={event => this.genericOnChange(event)}
              type="text"
              name="username"
              value={this.state.username}
            />
          </label>
          <label className="website">
            <p>Website</p>
            <input
              onChange={event => this.genericOnChange(event)}
              type="url"
              name="website"
              value={this.state.website}
            />
          </label>
          <label className="bio">
            <p>Bio</p>
            <textarea
              onChange={event => this.genericOnChange(event)}
              rows="2"
              name="bio"
              value={this.state.bio}
            />
          </label>
          <h6>Private Information</h6>
          <label className="email">
            <p>Email</p>
            <input
              onChange={event => this.genericOnChange(event)}
              type="email"
              name="email"
              value={this.state.email}
            />
          </label>
          <label className="phone-number">
            <p>Phone Number</p>
            <input
              onChange={event => this.genericOnChange(event)}
              type="number"
              name="phoneNumber"
              value={this.state.phoneNumber}
            />
          </label>
          <br />
          <label className="gender">
            <p>Gender</p>
            <select
              onChange={event => this.genericOnChange(event)}
              name="gender"
            >
              <option value={this.state.gender}>{this.state.gender}</option>
              <option value="Prefer not to say">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <p> Similar Account Suggestions</p>
          <label className="similar-accounts">
            <p>
              Include your account when recommending similar accounts people
              might want to follow.
            </p>
            <input type="checkbox" />
          </label>
          <div>
            <Link to={"/" + currentUser.username}>
              <ButtonSubmit text="Submit" styling="blue-button" />
            </Link>
            <Link to={"#"}>Temporarily disable my account</Link>
          </div>
        </form>
      </section>
    );
  }
}

export default ModifyProfile;
