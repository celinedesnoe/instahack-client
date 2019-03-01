import React, { Component } from "react";
import "./PostDetail.css";
import GridView from "./GridView.js";
import { Link } from "react-router-dom";
import { getPostDetails } from "../api";

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
          <b>{postUser.username} </b>
          {postItem.caption}
        </div>
      </div>
    );
  }
}

export default PostDetail;
