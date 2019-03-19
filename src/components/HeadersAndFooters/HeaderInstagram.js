import React, { Component } from "react";

import logoIg from "../../images/iglogo.png";

import "./HeaderInstagram.css";

class HeaderInstagram extends Component {
  render() {
    return (
      <div className="headerinstagram">
        <img className="logoIg" src={logoIg} alt="logo instagram" />
        <a href={this.props.link}> {this.props.textLink}</a>
      </div>
    );
  }
}

export default HeaderInstagram;
