import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        {this.props.text}
        <a href={this.props.link}> {this.props.textLink}</a>
      </div>
    );
  }
}

export default Footer;
