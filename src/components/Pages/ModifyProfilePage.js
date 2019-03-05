import React, { Component } from "react";

import { Link, Redirect } from "react-router-dom";
import ProfilePic from "../General/ProfilePic.js";

import { editUser } from "../../api.js";
import ButtonSubmit from "../General/ButtonSubmit.js";
import HeaderArrowBack from "../HeadersAndFooters/HeaderArrowBack";

import "./ModifyProfilePage.css";

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
      gender: this.props.currentUser.gender,
      isSubmit: false
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
      this.setState({ isSubmit: true });
    });
  }

  render() {
    const { currentUser } = this.props;
    const { profilePic } = this.props.currentUser;

    return this.state.isSubmit ? (
      <Redirect to={`/${currentUser.username}`} />
    ) : (
      <section className="ModifyProfile">
        <HeaderArrowBack
          text="Edit Profile"
          position="position-top"
          link={`/${currentUser.username}`}
        />
        <div className="header-edit d-flex">
          <ProfilePic
            profilePic={profilePic}
            size="profile-page"
            margin="m-20"
          />

          {/* <img className="user-thumbnail" src={currentUser.profilePic} /> */}

          <div className="d-flex flex-column justify-content-center">
            <h3>{currentUser.username}</h3>
            <Link to="#">
              <p className="smaller-size">
                <b>Change profile picture</b>
              </p>
            </Link>
          </div>
        </div>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label className="name">
            <p>
              <b>Name</b>
            </p>
            <input
              onChange={event => this.genericOnChange(event)}
              type="text"
              name="fullName"
              value={this.state.fullName}
              className="w-100"
            />
          </label>

          <label className="username">
            <p>
              <b>Username</b>
            </p>
            <input
              onChange={event => this.genericOnChange(event)}
              type="text"
              name="username"
              value={this.state.username}
              className="w-100"
            />
          </label>
          <label className="website">
            <p>
              <b>Website</b>
            </p>
            <input
              onChange={event => this.genericOnChange(event)}
              type="url"
              name="website"
              value={this.state.website}
              className="w-100"
            />
          </label>
          <label className="bio">
            <p>
              <b>Bio</b>
            </p>
            <textarea
              onChange={event => this.genericOnChange(event)}
              rows="2"
              name="bio"
              value={this.state.bio}
              className="w-100"
            />
          </label>
          <h6>Private Information</h6>
          <label className="email">
            <p>
              <b>Email</b>
            </p>
            <input
              onChange={event => this.genericOnChange(event)}
              type="email"
              name="email"
              value={this.state.email}
              className="w-100"
            />
          </label>
          <label className="phone-number">
            <p>
              <b>Phone Number</b>
            </p>
            <input
              onChange={event => this.genericOnChange(event)}
              type="number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              className="w-100"
            />
          </label>
          <br />
          <label className="gender">
            <p>
              <b>Gender</b>
            </p>
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
          <label className="similar-accounts">
            <p>
              <b>Similar Account Suggestions</b>
            </p>
            <div className="d-flex direction-row">
              <input type="checkbox" className="checkbox" />
              <p>
                Include your account when recommending similar accounts people
                might want to follow.
              </p>
            </div>
          </label>
          <div>
            <ButtonSubmit text="Submit" styling="blue-button" />

            <Link to={"#"}>Temporarily disable my account</Link>
          </div>
        </form>
      </section>
    );
  }
}

export default ModifyProfile;
