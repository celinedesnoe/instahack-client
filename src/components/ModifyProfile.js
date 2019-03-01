import React, { Component } from "react";
import { Link } from "react-router-dom";

class ModifyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { currentUser } = this.props;
    return (
      <section className="ModifyProfile">
        <header className="PageHeader">
          <img className="#" src="#" />
          <h2>Edit Profile</h2>
        </header>
        <div>
          <img className="user-thumbnail" src={currentUser.profilePic} />
          <h3>{currentUser.username}</h3>
          <Link to="#">Change Profile Photo</Link>
        </div>

        <form onSubmit={event => this.props.editSuccess(event)}>
          <label className="name">
            <p>Name</p>
            <input type="text" name="fullName" value={currentUser.fullName} />
          </label>
          <label className="username">
            <p>Username</p>
            <input type="text" name="username" value={currentUser.username} />
          </label>
          <label className="website">
            <p>Website</p>
            <input type="url" name="website" value={currentUser.website} />
          </label>
          <label className="bio">
            <p>Bio</p>
            <textarea Rows="2" name="bio" value="hwassuuuuuuuuuuup" />
          </label>
          <h6>Private Information</h6>
          <label className="email">
            <p>Email</p>
            <input type="email" name="email" value={currentUser.email} />
          </label>
          <label className="phone-number">
            <p>Phone Number</p>
            <input
              type="number"
              name="phoneNumber"
              value={currentUser.phoneNumber}
            />
          </label>
          <br />
          <label className="gender">
            <p>Gender</p>
            <select name="Gender">
              <option value="prefer-not-to-say">Prefer not to say</option>
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
            <button>Submit</button>
            <Link to="#">Temporarily disable my account</Link>
          </div>
        </form>
      </section>
    );
  }
}

export default ModifyProfile;
