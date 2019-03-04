import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  postComment(event) {
    // send comment content to back end along with: poster's id, post id, & content (write function in api.js)
    // set the state of showComment (in parent) to false
  }

  render() {
    return (
      <section className="AddComment">
        <input
          onChange={event => this.genericOnChange(event)}
          type="text"
          name="content"
          value={this.state.value}
          placeholder="Add a comment..."
        />
        <Link
          onClick={event => this.postComment(event)}
          to={`/p/${this.props.postId}`}
        />
      </section>
    );
  }
}

export default AddComment;
