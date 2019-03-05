import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPostDetails, postComment, likePost, unlikePost } from "../../api";

import AddComment from "../General/AddComment.js";
import LikesAndCommentBar from "../General/LikesAndCommentBar.js";
import Comment from "../General/Comment.js";

import "./PostDetailPage.css";

class PostDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postItem: {},
      postUser: {},
      allComments: [],
      showComment: false,
      newComment: "",
      numberOfLikes: "",
      liked: false
    };
  }

  componentDidMount() {
    const { params } = this.props.postInfo.match;
    console.log("Props in PDP: ", this.props);
    console.log("Post Id in PDP: ", params.postId);
    getPostDetails(params.postId)
      .then(response => {
        var likeState = false;
        if (
          response.data.post.likedBy.indexOf(this.props.currentUser._id) > -1
        ) {
          likeState = true;
        }

        const currentLikes = response.data.post.likedBy.length;

        console.log("Post Details", response.data);
        this.setState({
          postItem: response.data.post,
          postUser: response.data.post.username_id,
          allComments: response.data.comments,
          numberOfLikes: currentLikes,
          liked: likeState
        });
      })
      .catch(() => {
        alert("Sorry cannot find the details of this post");
      });
  }

  showCommentBox(event) {
    this.setState({ showComment: true });
  }

  like(event) {
    // - put currentUser id in the post's likedBy array
    const addLike = {
      post: this.state.postItem._id,
      liker: this.props.currentUser._id
    };

    likePost(addLike).then(response => {
      // console.log("RESPONSE TO LIKE: ", response.data);
      this.setState({ liked: true, postItem: response.data });
    });
  }

  unlike(event) {
    // - remove currentUser id from the post's likedBy array
    const removeLike = {
      post: this.state.postItem._id,
      unliker: this.props.currentUser._id
    };

    // use exported function from api.js in order to send the data
    unlikePost(removeLike).then(response => {
      // console.log("RESPONSE TO UNLIKE: ", response.data);
      this.setState({ liked: false, postItem: response.data });
    });
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  appendComment(event) {
    // send comment content to back end along with: poster's id, post id, & content (write function in api.js)
    // set the state of showComment (in parent) to false

    const { newComment } = this.state;
    const posterId = this.props.currentUser._id;
    const postId = this.state.postItem._id;

    // console.log(newComment);
    // console.log(posterId);
    // console.log(postId);

    const commentInfo = {
      username_id: posterId,
      post_id: postId,
      content: newComment
    };

    // console.log("COMMENT INFO: ", commentInfo);

    postComment(commentInfo).then(response => {
      console.log("comment added to array: ", response.data);
      this.state.allComments.unshift(response.data);
      // console.log("UPDATED COMMENTS: ", updatedComments);
      this.setState({ showComment: false });
    });
  }

  render() {
    const { postItem, postUser, allComments } = this.state;
    // console.log("Current User in Post Details: ", this.props.currentUser);
    // console.log("COMMENTS in PDP: ", allComments);
    return (
      <div className="PostDetailPage">
        POST DETAIL PAGE
        <div>{postUser.username}</div>
        <div>{postUser.profilePic}</div>
        <img src={postItem.image} />
        <LikesAndCommentBar
          liked={this.state.liked}
          allLikers={postItem.likedBy}
          commentBox={event => this.showCommentBox(event)}
          addLike={event => this.like(event)}
          removeLike={event => this.unlike(event)}
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
          {this.state.liked ? (
            <Link to={`/p/${postItem._id}/liked_by`}>
              {postItem.likedBy.length}
              <span> likes</span>
            </Link>
          ) : (
            <Link to={`/p/${postItem._id}/liked_by`}>
              0<span> likes</span>
            </Link>
          )}
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
        <p>{postItem.createdAt}</p>
        {this.state.showComment ? (
          // true, therefore render the Comment component
          <AddComment
            updateState={event => this.genericOnChange(event)}
            saveComment={event => this.appendComment(event)}
            originalPost={this.state.postItem._id}
          />
        ) : (
          // false, therefore show nothing
          <div />
        )}
      </div>
    );
  }
}

export default PostDetailPage;
