import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./FooterBlue.css";

class FooterBlue extends Component {
  render() {
    return (
      <div className="FooterBlue">
        {this.props.text}
        <a href={this.props.link} className="linkpadding">
          {this.props.textLink}
        </a>
      </div>
    );
  }
}

export default FooterBlue;
