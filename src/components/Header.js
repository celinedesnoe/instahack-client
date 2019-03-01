import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <a href={this.props.link}>...</a>
      </div>
    );
  }
}

export default Header;
