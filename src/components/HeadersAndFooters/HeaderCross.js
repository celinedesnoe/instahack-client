import React, { Component } from "react";
import { Link } from "react-router-dom";

import CrossBlack from "../../images/crossblack2.png";

import "./HeaderCross.css";

class HeaderCross extends Component {
  render() {
    return (
      <div className={`headerAge ${this.props.position}`}>
        <p className="text-arrow">{this.props.text}</p>

        <p>
          <a href={this.props.link}>
            <img className="gocross" src={CrossBlack} alt="Arrow Go Back" />
          </a>
        </p>
      </div>
    );
  }
}

export default HeaderCross;
