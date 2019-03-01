import React, { Component } from "react";

import "./ButtonLink.css";

class ButtonLink extends Component {
  render() {
    return <button className={this.props.styling}>{this.props.text}</button>;
  }
}

export default ButtonLink;
