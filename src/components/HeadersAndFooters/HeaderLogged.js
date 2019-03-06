import React, { Component } from "react";
import { Link } from "react-router-dom";

import optionpicture from "../../images/optionpicture.png";
import plusprofile from "../../images/plusprofile.png";

import "./HeaderLogged.css";

class HeaderLogged extends Component {
  render() {
    return (
      <div className={`header ${this.props.position}`}>
        <p className="nop">
          <a href={this.props.link}>
            <img className="optionss" src={optionpicture} alt="Arrow Go Back" />
          </a>
        </p>

        <p className="text-profile">{this.props.text}</p>

        <p className="nope">
          <a href={this.props.link}>
            <img className="optionsss" src={plusprofile} alt="Arrow Go Back" />
          </a>
        </p>
      </div>
    );
  }
}

export default HeaderLogged;
