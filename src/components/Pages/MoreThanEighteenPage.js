import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <h3>Are You 18 Years or Older?</h3>

        <p>
          You can still use Instagram if you're younger than 18. Your age
          affects the resources we offer and the way we use your data for ads.
        </p>

        <Link to="/accounts/signup">
          <form onSubmit={this.handleSubmit}>
            <input
              onClick={event => this.props.ageStatus(event)}
              type="radio"
              className="age"
              checked={this.state.age === "plus"}
              onChange={this.handleChange}
              value="plus"
            />
            18 or older
            <br />
            <input
              onClick={event => this.props.ageStatus(event)}
              type="radio"
              className="age"
              checked={this.state.age === "less"}
              onChange={this.handleChange}
              value="less"
            />
            Under 18
          </form>
        </Link>
      </div>
    );
  }
}

export default MoreThanEighteen;
