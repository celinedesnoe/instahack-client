import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./TermsAndConditionsPage.css";

class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="TermsAndConditions">
        <div className="topText">
          <h3 className="welcome">Welcome to Instagram, {this.props.un}</h3>
          <p className="findpeople">
            Find people to follow and start sharing photos. You can change your
            username anytime.
          </p>
          <Link to="#" className="changeusername">
            Change username
          </Link>
        </div>
        <button
          onClick={event => this.props.hasAgreed(event)}
          className="blue-button large"
        >
          Next
        </button>
        <p className="bysigning">
          By signing up, you agree to our <b className="blackwords">Terms</b>.
          Learn how we collect, use and share your data in our
          <b className="blackwords"> Data Policy</b> and how we use cookies and
          similar technology in our <b className="blackwords">Cookies Policy</b>
          .
        </p>
      </div>
    );
  }
}

export default TermsAndConditions;
