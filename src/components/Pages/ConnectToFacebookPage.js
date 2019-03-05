import React, { Component } from "react";
import { Link } from "react-router-dom";

import circlefacebook from "../../images/roundfacebookline.png";

import "./ConnectToFacebookPage.css";

class ConnectToFacebook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ConnectToFacebook">
        <div className="connecttofacebook">
          <img
            src={circlefacebook}
            alt="facebook in a circle"
            className="circlefacebook"
          />
          <h4 className="connecttoFacebook">Connect to Facebook</h4>
          <p className="connecttofriends">
            Connect to Facebook to find friends to follow.
          </p>
          <button
            onClick={event => this.props.addPhoto(event)}
            className="blue-button"
          >
            Connect to Facebook
          </button>
        </div>
        <Link
          onClick={event => this.props.addPhoto(event)}
          to="#"
          className="skip1"
        >
          Skip
        </Link>
      </div>
    );
  }
}

export default ConnectToFacebook;
