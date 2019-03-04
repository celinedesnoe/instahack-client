import React, { Component } from "react";

import Header from "../HeadersAndFooters/Header";
import ButtonNext from "../General/ButtonNext";

import "./EditEmail.css";

class EditEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="HeaderEnglish">
        <Header />
        <form
          className="EditEmail"
          onSubmit={event => this.props.checkEmail(event)}
        >
          <label className="emailforminput">
            <p className="email">EMAIL</p>
            <hr className="hrEmail" />
            <input
              onChange={event => this.props.updateState(event)}
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email Address"
              className="formEmail"
            />
            <div className="bigdiv">
              <button href="#" className="autoEmail">
                @gmail.com
              </button>
              <button href="#" className="autoEmail">
                @hotmail.com
              </button>
            </div>
            <ButtonNext
              text="Next"
              styling="blue-button large"
              link="/accounts/login"
            />
            {/*(ACTIVATE ONLY ONCE FIELD HAS BEEN FILLED) */}
          </label>
        </form>
      </div>
    );
  }
}

export default EditEmail;
