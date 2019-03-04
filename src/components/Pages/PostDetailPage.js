import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPostDetails } from "../../api";

import "./PostDetailPage.css";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postItem: {},
      postUser: {}
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    getPostDetails(params.postId)
      .then(response =>
        // console.log("Post Details", response.data)
        this.setState({
          postItem: response.data,
          postUser: response.data.username_id
        })
      )
      .catch(() => {
        alert("Sorry cannot find the details of this post");
      });
  }

  render() {
    const { postItem, postUser } = this.state;

    // console.log(user);
    return (
      <div className="PostDetail">
        POST DETAIL PAGE
        <div>{postUser.username}</div>
        <div>{postUser.profilePic}</div>
        <img src={postItem.image} />
        <div>
          Like/Comment Bar goes here{/* placeholder for Like/Comment Bar */}
        </div>
        <div>
          <b>{postUser.username} </b>
          {postItem.caption}
        </div>
        <div>
          Comments List goes here{" "}
          {/* 
            TO ADD A COMMENT

            1. click comment button on post
            2. conditional render at the bottom of the page brings up an single-input form, placeholder: Add a comment… with a Link that says “Post”
            3. onSubmit of the “Post” , activate submitComment function
            4. submitComment takes: id of the post on which the comment was made, id of the current user , & content of the comment
            5. sends all to the backEnd through api.js


            TO RENDER COMMENTS ON A POST
            1. query Comments in db for documents with post_Id matching that of the current post — to retrieve commentDoc, which will contain the content and id of person who commented, ordered from oldest to youngest
            2. within this query, query Users for documents with with _id matching that of the person who commented — to retrieve their username and profile picture
            3. send content, username, & profile picture back in a res.json to be rendered in a Comment component
        */}
        </div>
      </div>
    );
  }
}

export default PostDetail;
