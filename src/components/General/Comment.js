import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Comment">
        <img src={this.props.pic} alt="user profile" />
        <p> {this.props.commenter}</p>
        <span>
          <p>{this.props.comment} </p>
        </span>
      </div>
    );
  }
}

export default Comment;
