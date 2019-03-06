import React, { Component } from "react";
import LikeButton from "../../images/likeempty.png";
import CommentButton from "../../images/chatline.png";
import UnlikeButton from "../../images/likefullred.png";

import "./LikesAndCommentBar.css";

class LikesAndCommentBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="LikesAndCommentBar">
        {/* the like button uses to the addLike function in the parent.
        on click, it sends the name of the liking user (currentUser) to the post's likedBy array.
        as well, it changes the boolean liked to true, which renders the red heart icon.
        */}
        {this.props.liked ? (
          <img
            onClick={event => this.props.removeLike(event)}
            // className="Unlike"
            src={UnlikeButton}
            alt="to unlike"
          />
        ) : (
          <img
            onClick={event => this.props.addLike(event)}
            // className="Like"
            src={LikeButton}
            alt="to like"
          />
          /*
          - onClick for Like
            - put currentUser id in the posts likedBy array
            - conditional render transparent heart vs red heart if currentUser._id is in the post's likedBy array
          */
        )}

        <img
          onClick={event => this.props.commentBox(event)}
          // className="Comment"
          src={CommentButton}
          alt="to add a comment"
        />
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
