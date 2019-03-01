import React, { Component } from "react";
import { Link } from "react-router-dom";

class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="TermsAndConditions">
        <h1>SCREEN 3</h1>

        <h3>Welcome to Instagram, {this.props.un}!</h3>
        <p>
          Find people to follow and start sharing photos. You can change your
          username anytime.
        </p>
        <Link to="#">Change username</Link>
        <button onClick={event => this.props.hasAgreed(event)}>Next</button>
        <p>
          By signing up, you agree to our <b>Terms</b>.
        </p>
        <p>
          Learn how we collect, use and share your data in our
          <b> Data Policy</b> and how we use cookies and similar technology in
          our <b>Cookies Policy</b>.
        </p>
      </div>
    );
  }
}

export default TermsAndConditions;
