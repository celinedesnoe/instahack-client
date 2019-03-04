import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPostDetails } from "../../api";

import AddComment from "../General/AddComment.js";
import LikesAndCommentBar from "../General/LikesAndCommentBar.js";
import Comment from "../General/Comment.js";

import "./PostDetailPage.css";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postItem: {},
      postUser: {},
      allComments: [],
      showComment: false
    };
  }

  componentDidMount() {
    const { params } = this.props.postInfo.match;
    console.log("Props in PDP: ", this.props);
    console.log("Post Id in PDP: ", params.postId);
    getPostDetails(params.postId)
      .then(response => {
        console.log("Post Details", response.data);
        this.setState({
          postItem: response.data.post,
          postUser: response.data.post.username_id,
          allComments: response.data.comments
        });
      })
      .catch(() => {
        alert("Sorry cannot find the details of this post");
      });
  }

  showCommentBox(event) {
    this.setState({ showComment: true });
    console.log(this.state.postItem._id);
  }

  likePost(event) {
    // - put currentUser id in the post's likedBy array
    console.log("coucou LIKE!");
    const addLike = {
      post: this.state.postItem._id,
      liker: this.props.currentUser._id
    };
    console.log(this.state.postItem._id);
    console.log(this.props.currentUser._id);
    console.log(addLike);
  }

  appendComment(event) {}

  render() {
    const { postItem, postUser, allComments } = this.state;
    // console.log("Current User in Post Details: ", this.props.currentUser);
    console.log("COMMENTS in PDP: ", allComments);
    return (
      <div className="PostDetail">
        POST DETAIL PAGE
        <div>{postUser.username}</div>
        <div>{postUser.profilePic}</div>
        <img src={postItem.image} />
        <LikesAndCommentBar
          allLikers={postItem.likedBy}
          commentBox={event => this.showCommentBox(event)}
          addLike={event => this.likePost(event)}
        />
        {/* Like/Comment Bar goes here */}
        {/* placeholder for Like/Comment Bar
          - onClick for Like
            - put currentUser id in the posts likedBy array
          - onClick for the Comment
            - conditional render at the bottom of the page brings up an single-input form, placeholder: Add a comment… with a Link that says “Post”
            - onSubmit of the “Post” , activate submitComment function
            - submitComment takes: id of the post on which the comment was made, id of the current user , & content of the comment
            - sends all to the back end through api.js
          */}
        <p>
          x likes
          {/* placeholder for Link that goes to the Likes page
          - onClick for the link
            - go to route /p/:postId/liked_by
            - get all people in the likedBy array for a post with :postId
            - render profileRow for each (send username, profilePic, follow/unfollow)
          */}
        </p>
        <div>
          <b>{postUser.username} </b>
          {postItem.caption}
        </div>
        <div className="comment-list">
          {allComments.map(oneComment => {
            return (
              <Comment
                key={oneComment._id}
                pic={oneComment.username_id.profilePic}
                commenter={oneComment.username_id.username}
                comment={oneComment.content}
              />
            );
          })}
          {/* 
            TO RENDER COMMENTS ON A POST
            1. query Comments in db for documents with post_Id matching that of the current post — to retrieve commentDoc, which will contain the content and id of person who commented, ordered from oldest to youngest
            2. within this query, query Users for documents with with _id matching that of the person who commented — to retrieve their username and profile picture
            3. send content, username, & profile picture back in a res.json to be rendered in a Comment component
        */}
        </div>
        <p>placeholder for date post was posted</p>
        {this.state.showComment ? (
          // true, therefore render the Comment component
          <AddComment />
        ) : (
          // false, therefore show nothing
          <div />
        )}
      </div>
    );
  }
}

export default PostDetail;
