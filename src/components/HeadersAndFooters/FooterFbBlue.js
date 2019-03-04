import React, { Component } from "react";
import { Link } from "react-router-dom";

import whitefb from "../../images/facebookiconwhite.png";

import "./FooterFbBlue.css";

class FooterFbBlue extends Component {
  render() {
    return (
      <div className="FooterFbBlue">
        <a href={this.props.link}>
          {this.props.textLink}
          <img src={whitefb} alt="facebook logo" className="fbicon2" />
          {this.props.text}
        </a>
      </div>
    );
  }
}

export default FooterFbBlue;
