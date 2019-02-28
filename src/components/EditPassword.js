import React, { Component } from "react";

class EditPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <input type="password" name="password" placeholder="Password" />;
  }
}

export default EditPassword;
