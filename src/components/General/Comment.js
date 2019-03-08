import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Comment.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <p className="Comment">
        <Link to={`/${this.props.commenter}`}>
          {" "}
          <b> {this.props.commenter}</b>
        </Link>
        <span className="content">{this.props.comment}</span>
      </p>
    );
  }
}

export default Comment;
