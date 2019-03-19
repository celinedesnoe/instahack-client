import React, { Component } from "react";
import ButtonNext from "../General/ButtonNext.js";

import "./AddUsernameAndPsw.css";

class AddUsernameAndPsw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      originalPassword: ""
    };
  }
  render() {
    return (
      <div className="EditNameAndPsw">
        <form
          onSubmit={event => this.props.handlefullNameSubmitted(event)}
          className="EditNamePsw"
        >
          <p className="entername">Enter name and password</p>
          <p className="addyourname">Add your name so friends can find you.</p>

          <button className="revealPsw">Show</button>

          <div className="formField2">
            <input
              onChange={event => this.props.updateState(event)}
              type="text"
              name="fullName"
              value={this.state.fullName}
              placeholder="Full Name"
              className="inputRegister"
            />

            <input
              onChange={event => this.props.updateState(event)}
              type="password"
              name="originalPassword"
              value={this.state.originalPassword}
              placeholder="Password"
              className="inputRegister"
            />
          </div>

          <ButtonNext text="Next" styling="blue-button large" />
        </form>
      </div>
    );
  }
}

export default AddUsernameAndPsw;
