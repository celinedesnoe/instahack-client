import React, { Component } from "react";

import optionpicture from "../../images/optionpicture.png";
import plusprofile from "../../images/plusprofile.png";

import "./HeaderLogged.css";

class HeaderLogged extends Component {
  render() {
    return (
      <section className={`blop`}>
        <a href={this.props.link}>
          <img
            src={optionpicture}
            alt="settings"
            onClick={() => this.props.logout()}
          />
        </a>

        <p className="text-profile">{this.props.text}</p>

        <a href={this.props.link}>
          <img src={plusprofile} alt="follow users" />
        </a>
      </section>
    );
  }
}

export default HeaderLogged;
