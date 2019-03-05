import React, { Component } from "react";
import { Link } from "react-router-dom";

import ButtonNext from "../General/ButtonNext";

import "./FooterNext.css";

class FooterNext extends Component {
  render() {
    return <div className="FooterNext">{this.props.text}</div>;
  }
}

export default FooterNext;
