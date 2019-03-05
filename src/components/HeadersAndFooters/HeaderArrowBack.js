import React, { Component } from "react";
import { Link } from "react-router-dom";

import ArrowGoBack from "../../images/arrowbackbold.png";

import "./HeaderArrowBack.css";

class HeaderArrowBack extends Component {
  render() {
    return (
      <div className={`header ${this.props.position}`}>
        <img className="goback" src={ArrowGoBack} alt="Arrow Go Back" />
        <p className="text-arrow">{this.props.text}</p>
        <a href={this.props.link}> {this.props.textLink}</a>
      </div>
    );
  }
}

export default HeaderArrowBack;
