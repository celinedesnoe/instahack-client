import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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
