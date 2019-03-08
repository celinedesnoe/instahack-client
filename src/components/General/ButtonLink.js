import React, { Component } from "react";

import "./ButtonLink.css";

class ButtonLink extends Component {
  render() {
    return (
      <a href={this.props.link} className="buttonlink">
        <button className={this.props.styling}> {this.props.text}</button>
      </a>
    );
  }
}

export default ButtonLink;
