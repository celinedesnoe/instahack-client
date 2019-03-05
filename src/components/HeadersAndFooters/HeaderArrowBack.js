import React, { Component } from "react";
import { Link } from "react-router-dom";

import ArrowGoBack from "../../images/arrowbackbold.png";

import "./HeaderArrowBack.css";

class HeaderArrowBack extends Component {
  render() {
    return (
      <div className={`header ${this.props.position}`}>
        <p>
          <a href={this.props.link}>
            <img className="goback" src={ArrowGoBack} alt="Arrow Go Back" />
          </a>
        </p>

        <p className="text-arrow">{this.props.text}</p>
      </div>
    );
  }
}

export default HeaderArrowBack;
