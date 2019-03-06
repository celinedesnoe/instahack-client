import React, { Component } from "react";
import { getNewsfeedPosts } from "../../api.js";

import "./NewsfeedPage.css";
import PostDetailPage from "./PostDetailPage.js";
import HeaderLogged from "../HeadersAndFooters/HeaderLogged.js";
import HeaderCross from "../HeadersAndFooters/HeaderCross.js";

class Newsfeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsToRender: []
    };
  }

  componentDidMount() {
    // fnc exported from api.js
    // queries to get a giant array of posts from each user someone is following
    getNewsfeedPosts(this.props.currentUser).then(response => {
      console.log("ALL POSTS in NEWSFEED: ", response.data);
      const allPostIds = response.data.map(oneId => {
        return { match: { params: { postId: oneId } } };
      });

      console.log(this.props);

      // this.state.postsToRender.unshift(response.data);
      this.setState({ postsToRender: allPostIds });
    });
  }

  render() {
    const { postsToRender } = this.state;
    console.log("POSTSTORENDER in NEWSFEED RENDER: ", postsToRender);

    return (
      <section className="Newsfeed">
        {/* <HeaderCross /> */}
        {postsToRender.map(onePost => {
          return (
            <PostDetailPage
              postInfo={onePost}
              currentUser={this.props.currentUser}
              rerouteUrl={this.props.rerouteUrl}
            />
          );
        })}
      </section>
    );
  }
}

export default Newsfeed;
