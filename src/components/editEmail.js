import React, { Component } from "react";

class EditEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <label>
        EMAIL
        <input
          onChange={event => this.props.updateState(event)}
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Email Address"
        />
      </label>
    );
  }
}

export default EditEmail;
