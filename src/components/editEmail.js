import React, { Component } from "react";

class EditEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form
        className="EditEmail"
        onSubmit={event => this.props.checkEmail(event)}
      >
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
        <button>Next (ACTIVATE ONLY ONCE FIELD HAS BEEN FILLED)</button>
      </form>
    );
  }
}

export default EditEmail;
