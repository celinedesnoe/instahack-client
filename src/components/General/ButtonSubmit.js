import React, { Component } from "react";

import "./ButtonSubmit.css";

class ButtonSubmit extends Component {
  render() {
    return (
      <button className={this.props.styling} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonSubmit;
