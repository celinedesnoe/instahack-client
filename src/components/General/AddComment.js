import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <input
          onChange={event => this.props.updateState(event)}
          type="text"
          name="newComment"
          placeholder="Add a comment..."
        />
        <Link
          onClick={event => this.props.saveComment(event)}
          to={`/p/${this.props.originalPost}`}
        >
          Submit
        </Link>
      </section>
    );
  }
}

export default AddComment;
