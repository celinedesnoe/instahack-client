import React, { Component } from "react";
import { Link } from "react-router-dom";

import logoIg from "../../images/iglogo.png";

import "./HeaderFollow.css";

class HeaderFollow extends Component {
  render() {
    return (
      <div className="headerfollow">
        <p className="bold"> {this.props.text}</p>
      </div>
    );
  }
}

export default HeaderFollow;
