import React, { Component } from "react";
import { Link } from "react-router-dom";

import optionpicture from "../../images/optionpicture.png";
import plusprofile from "../../images/plusprofile.png";

import "./HeaderLogged.css";

class HeaderLogged extends Component {
  render() {
    return (
      <section className={`blop`}>
        <a href={this.props.link}>
          <img src={optionpicture} alt="Arrow Go Back" />
        </a>

        <p className="text-profile">{this.props.text}</p>

        <a href={this.props.link}>
          <img src={plusprofile} alt="Arrow Go Back" />
        </a>
      </section>
    );
  }
}

export default HeaderLogged;

{
  /* <nav>
  {this.state.currentUser ? (
    <span>
      <button onClick={() => this.logoutClick()}>
        <Link exact to="/">
          Log Out
        </Link>
      </button>
    </span>
  ) : (
    <span className="navbar">
      <NavLink to="/accounts/login">Log In</NavLink>
    </span>
  )}
</nav>; */
}
