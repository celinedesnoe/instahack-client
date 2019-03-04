import React, { Component } from "react";
import { Link } from "react-router-dom";

import ArrowGoBack from "../images/arrowbackbold.png";

import "./HeaderRegister.css";

class HeaderFooter extends Component {
  render() {
    return (
      <div className="header">
        <img className="goback" src={ArrowGoBack} alt="Arrow Go Back" />
        <p className="register">{this.props.text}</p>
        <a href={this.props.link}> {this.props.textLink}</a>
      </div>
    );
  }
}

export default HeaderFooter;
