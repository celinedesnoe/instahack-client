import React, { Component } from "react";
import "./ButtonLink.css";

class ButtonLink extends Component {
  render() {
    return (
      <a className={this.props.styling} href={this.props.link}>
        {this.props.text}
      </a>
    );
  }
}

export default ButtonLink;
