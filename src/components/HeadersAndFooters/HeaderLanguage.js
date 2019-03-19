import React, { Component } from "react";

import arrowdown from "../../images/arrowdowngrey.png";
import threedots from "../../images/3dots.png";

import "./HeaderLanguage.css";

class HeaderLanguage extends Component {
  render() {
    return (
      <div className="HeaderLanguage">
        <a href={this.props.link} className="dots">
          <img className="threedots" src={threedots} alt="three dots" />
        </a>
        <div className="middletitle">
          <p className="languageTitle">ENGLISH</p>
          <div className="arrowdiv">
            <img className="arrowdown" src={arrowdown} alt="down arrow grey" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderLanguage;
