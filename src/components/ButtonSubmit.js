import React, { Component } from "react";

import "./ButtonLink.css";

class ButtonLink extends Component {
  render() {
    return (
      <button className={this.props.styling} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonLink;
