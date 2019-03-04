import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footerfirstscreen">
        {this.props.text}
        <a href={this.props.link} className="linkpadding">
          {this.props.textLink}
        </a>
      </div>
    );
  }
}

export default Footer;
