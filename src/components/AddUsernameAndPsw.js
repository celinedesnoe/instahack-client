import React, { Component } from "react";

import ButtonNext from "./ButtonNext.js";

import "./AddUsernameAndPsw.css";

class AddUsernameAndPsw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form
        onSubmit={event => this.props.submitForm(event)}
        className="EditNamePsw"
      >
        <p className="entername">Enter name and password</p>
        <p className="addyourname">Add your name so friends can find you.</p>

        <button className="revealPsw">Show</button>

        <div className="formField">
          <input
            onChange={event => this.props.updateState(event)}
            type="text"
            name="fullName"
            value={this.state.fullName}
            placeholder="Full Name"
          />

          <input
            onChange={event => this.props.updateState(event)}
            type="password"
            name="originalPassword"
            value={this.state.originalPassword}
            placeholder="Password"
          />
        </div>

        <ButtonNext
          text="Next"
          styling="blue-button large"
          link="/accounts/login"
        />
      </form>
    );
  }
}

export default AddUsernameAndPsw;
