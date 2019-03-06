import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./AddComment.css";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  render() {
    return (
      <section className="AddComment">
        <textarea
          class="comment-input"
          onChange={event => this.props.updateState(event)}
          type="text"
          rows="1"
          name="newComment"
          placeholder="Add a comment..."
        />
        <Link
          onClick={event => this.props.saveComment(event)}
          to={`/p/${this.props.originalPost}`}
          className="topost"
        >
          Post
        </Link>
      </section>
    );
  }
}

export default AddComment;
