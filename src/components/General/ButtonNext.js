import React, { Component } from "react";

import "./ButtonNext.css";

class ButtonNext extends Component {
  render() {
    return (
      <button type="submit" className={this.props.styling}>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonNext;
