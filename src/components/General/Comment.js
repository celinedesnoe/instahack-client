import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <p className="Comment">
        <b> {this.props.commenter}</b>
        <span className="content">{this.props.comment}</span>
      </p>
    );
  }
}

export default Comment;
