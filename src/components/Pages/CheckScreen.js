import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import "./CheckScreen.css";

class CheckScreen extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: true
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    return (
      <>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-70w"
          aria-labelledby="example-custom-modal-styling-title"
          className="check-screen"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Be careful!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-align">
              <p>
                Our Instagram clone only works on a <br />
                <b>phone screen mode.</b>
              </p>
              <p>Who use Instagram on its desktop by the way? </p>
              <div className="smaller-modal-text">
                <p>
                  Pssst you can use this account to log in if you don't want to
                  sign up
                </p>
                <p>
                  <b>Email:</b> visitor@ironhack.com
                  <br />
                  <b>Password:</b> abc123
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default CheckScreen;
