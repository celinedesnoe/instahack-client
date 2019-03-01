import React, { Component } from "react";
import "./ButtonLinkFacebook.css";
import whitefb from "../images/facebookiconwhite.png";

class ButtonLink extends Component {
  render() {
    return (
      <a className={this.props.styling} href={this.props.link}>
        <img src={whitefb} alt="facebook logo" className="fbicon" />
        {this.props.text}
      </a>
    );
  }
}

export default ButtonLink;
