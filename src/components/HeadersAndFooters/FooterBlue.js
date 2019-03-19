import React, { Component } from "react";

import "./FooterBlue.css";

class FooterBlue extends Component {
  render() {
    return (
      <div className="FooterBlue">
        <p className="AlignText">
          {this.props.text}
          <a href={this.props.link} className="linkpadding">
            {this.props.textLink}
          </a>
        </p>
      </div>
    );
  }
}

export default FooterBlue;
