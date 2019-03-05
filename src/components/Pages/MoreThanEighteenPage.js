import React, { Component } from "react";
import { Link } from "react-router-dom";

import HeaderCross from "../HeadersAndFooters/HeaderCross.js";
import ButtonNext from "../General/ButtonNext";

import "./MoreThanEighteenPage.css";

class MoreThanEighteen extends Component {
  constructor() {
    super();

    this.state = {
      age: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      age: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.age);
  }

  render() {
    return (
      <div className="MoreThanEighteen">
        <HeaderCross text="Age" link="/accounts/signup" />
        <div className="body18">
          <h3 className="areyou18">Are You 18 Years or Older?</h3>

          <div className="alignleft">
            <p className="youcanstill">
              You can still use Instagram if you're younger than 18. Your age
              affects the resources we offer and the way we use your data for
              ads.
            </p>

            <form
              onSubmit={event => this.props.ageStatus(event)}
              className="age"
            >
              {/* <label className="moreAge">
                18 or older */}
              <input
                type="radio"
                className="moreage"
                checked={this.state.age === "plus"}
                onChange={this.handleChange}
                value="plus"
              />
              <p className="moreAge">18 or older</p> {/* </label> */}
              <br />
              {/* <label className="lessAge">
                Under 18 */}
              <input
                type="radio"
                className="lessage"
                checked={this.state.age === "less"}
                onChange={this.handleChange}
                value="less"
              />
              <p className="lessAge">Under 18</p>
              {/* </label> */}
              <div className="buttonnext1">
                <ButtonNext
                  text="Next"
                  styling="blue-button large"
                  link="/accounts/signup"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreThanEighteen;
