import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPostDetails, postComment, likePost, unlikePost } from "../../api";
import moment from "moment";

import AddComment from "../General/AddComment.js";
import LikesAndCommentBar from "../General/LikesAndCommentBar.js";
import HeaderArrowBack from "../HeadersAndFooters/HeaderArrowBack.js";
import Comment from "../General/Comment.js";

import ProfilePic from "../General/ProfilePic";
import threeDotsBlack from "../../images/3dots.png";

import "./PostDetailPage.css";

// to add: following, not following

class PostDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postItem: {},
      postUser: {},
      allComments: [],
      showComment: false,
      newComment: "",
      liked: false,
      fromNewsfeed: false
    };
  }

  componentDidMount() {
    console.log("Props in PDP: ", this.props);
    const { params } = this.props.postInfo.match;
    console.log("Post Id in PDP: ", params.postId);
    getPostDetails(params.postId)
      .then(response => {
        var likeState = response.data.post.likedBy.some(oneLiker => {
          return oneLiker._id === this.props.currentUser._id;
        });

        // console.log(response.data.post.likedBy);

        // array methods: find
        // some:

        var lastPageNewsfeed = false;

        if (this.props.rerouteUrl === "/") {
          console.log("last page newsfeed");
          lastPageNewsfeed = true;
        }

        console.log("Post Details", response.data);
        this.setState({
          postItem: response.data.post,
          postUser: response.data.post.username_id,
          allComments: response.data.comments,
          liked: likeState,
          fromNewsfeed: lastPageNewsfeed
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
    // aggregate the necessary info in order to put the currentUser in the post's likedBy array
    // - post ID
    // - ID of the current user
    const addLike = {
      post: this.state.postItem._id,
      liker: this.props.currentUser._id
    };

    // send this info to the back end (fnc exported from api.js)
    likePost(addLike).then(response => {
      console.log("RESPONSE TO LIKE: ", response.data);

      // update boolean in order to show the right like button
      // update the postItem in order to display the right number of likes
      this.setState({ liked: true, postItem: response.data });
    });
  }

  unlike(event) {
    // aggregating the necessary info in order to remove currentUser from the post's likedBy array
    // - post ID
    // - ID of the current user
    const removeLike = {
      post: this.state.postItem._id,
      unliker: this.props.currentUser._id
    };

    // send this info to the back end (fnc exported from api.js)
    unlikePost(removeLike).then(response => {
      console.log("RESPONSE TO UNLIKE: ", response.data);

      // update boolean in order to show the right like button
      // update the postItem in order to display the right number of likes
      this.setState({ liked: false, postItem: response.data });
    });
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  appendComment(event) {
    // send comment content to back end along with: poster's id, post id, & content (write function in api.js)
    const commentInfo = {
      username_id: this.props.currentUser._id,
      post_id: this.state.postItem._id,
      content: this.state.newComment
    };

    // console.log("COMMENT INFO: ", commentInfo);

    postComment(commentInfo).then(response => {
      console.log("comment added to array: ", response.data);
      // add new comment info to the front of the comments array to be rendered at the top
      this.state.allComments.unshift(response.data);

      // set the state of showComment (in parent) to false
      this.setState({ showComment: false });
    });
  }

  render() {
    const { postItem, postUser, allComments } = this.state;
    // console.log("Current User in Post Details: ", this.props.currentUser);
    // console.log("COMMENTS in PDP: ", allComments);
    return (
      <div className="PostDetailPage w-100">
        {this.state.fromNewsfeed ? (
          <div />
        ) : (
          <HeaderArrowBack text="Photo" link={`/${postUser.username}`} />
        )}

        <div className="margin-top-45">
          {/* show poster's profilepic & username */}
          <div className="ProfileRow d-flex row justify-content-between m-0">
            <div className="d-flex flex-row align-items-center">
              <Link
                to={"/" + postUser.username}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div>
                  <ProfilePic
                    profilePic={postUser.profilePic}
                    size="profile-row"
                  />
                </div>
              </Link>
              <Link
                to={"/" + postUser.username}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="poster-name">
                  <div className="bold">{postUser.username}</div>
                </div>
              </Link>
            </div>
            <img src={threeDotsBlack} alt="menu" className="post-menu" />
          </div>

          {/* show the actual pic of the post */}
          <img
            src={postItem.image}
            alt="mainpic"
            className={`mainpic ${postItem.style}`}
          />

          {/* component that allows viewers of a post to like or comment */}
          <LikesAndCommentBar
            liked={this.state.liked}
            allLikers={postItem.likedBy}
            commentBox={event => this.showCommentBox(event)}
            addLike={event => this.like(event)}
            removeLike={event => this.unlike(event)}
          />

          <div className="comment-list">
            {/* info about the number of likes and the pictures of those who have liked
            - onClick for the link
            - go to route /p/:postId/liked_by
            - get all people in the likedBy array for a post with :postId
            - render profileRow for each (send username, profilePic, follow/unfollow)
        */}
            <div className="comment-info">
              <div className="margin-bottom-10">
                {/* {this.state.liked ? ( */}

                {postItem.likedBy ? (
                  <Link to={`/p/${postItem._id}/liked_by`} postItem={postItem}>
                    {/********************************************/}
                    {/************** NUMBER OF LIKES *************/}
                    {/********************************************/}
                    <b>
                      {postItem.likedBy.length}
                      <span> likes</span>
                    </b>
                    {/********************************************/}
                    {/************** LIKED BY ********************/}
                    {/********************************************/}
                    {postItem.likedBy.length === 1 && (
                      <div>
                        {" "}
                        Liked by <b>{postItem.likedBy[0].username}</b>{" "}
                      </div>
                    )}

                    {postItem.likedBy.length === 2 && (
                      <div>
                        {" "}
                        Liked by <b>{postItem.likedBy[0].username}</b> and{" "}
                        <b> {postItem.likedBy.length - 1} other person</b>
                      </div>
                    )}

                    {postItem.likedBy.length > 2 && (
                      <div>
                        {" "}
                        Liked by <b>{postItem.likedBy[0].username}</b> and{" "}
                        <b> {postItem.likedBy.length - 1} other people</b>
                      </div>
                    )}
                  </Link>
                ) : (
                  // <Link to={`/p/${postItem._id}/liked_by`} postItem={postItem}>
                  //   <b>
                  //     {postItem.likedBy.length}
                  //     <span> likes</span>

                  //     {postItem.likedBy[0].username}
                  //   </b>
                  // </Link>
                  <Link to={`/p/${postItem._id}/liked_by`}>
                    <b>
                      0<span> likes</span>
                    </b>
                  </Link>
                )}
              </div>
              {/* the poster's username & caption */}
              <div>
                <b>{postUser.username} </b>
                {postItem.caption}
              </div>
              {/* displaying all comments on a post */}
              <p className="margin-top-10 color-gray">
                View all {allComments.length} comments
              </p>
              {allComments.map(oneComment => {
                return (
                  <Comment
                    key={oneComment._id}
                    commenter={oneComment.username_id.username}
                    comment={oneComment.content}
                  />
                );
              })}
            </div>

            {/* the date at which the post was originally posted */}
            <p>
              {moment(postItem.createdAt)
                .startOf("hour")
                .fromNow()}
            </p>

            {/* the component through which a user can add a comment
          - displays after the comment button is clicked on the LikesAndCommentBar component above
         */}
            {this.state.showComment ? (
              // true, therefore render the Comment component
              <AddComment
                updateState={event => this.genericOnChange(event)}
                saveComment={event => this.appendComment(event)}
                originalPost={this.state.postItem._id}
                rerouteUrl={this.props.rerouteUrl}
              />
            ) : (
              // false, therefore show nothing
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetailPage;
