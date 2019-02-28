import React, { Component } from "react";

class AddUsernameAndPsw extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={event => this.props.submitForm(event)}>
        <h1>SCREEN 2</h1>
        DON'T SHOW UNTIL EMAIL IS SUBMITTED
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
        <button>
          Next (THIS IS THE SUBMIT) (ACTIVATE ONLY ONCE BOTH FIELDS HAVE BEEN
          FILLED)
        </button>
      </form>
    );
  }
}

export default AddUsernameAndPsw;
