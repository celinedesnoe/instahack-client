import React, { Component } from "react";

class LikesAndCommentBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="LikesAndCommentBar">
        <img className="Like" src="../../images/" alt="like this photo" />
        {/*
          - onClick for Like
            - put currentUser id in the posts likedBy array
          */}

        <img className="Comment" src="../../images/" alt="add a comment" />
        {/*
          - onClick for the Comment
            - change conditional render boolean for showComments to "true"
            - conditional render at the bottom of the page brings up an single-input form, placeholder: Add a comment… with a Link that says “Post”
            - onSubmit of the “Post” , activate submitComment function
            - submitComment takes: id of the post on which the comment was made, id of the current user , & content of the comment
            - sends all to the back end through api.js
          */}
      </section>
    );
  }
}

export default LikesAndCommentBar;
