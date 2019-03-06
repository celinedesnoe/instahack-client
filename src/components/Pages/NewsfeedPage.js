import React, { Component } from "react";
import { newsfeed } from "../../api.js";

import "./NewsfeedPage.css";
import PostDetailPage from "./PostDetailPage.js";

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
    newsfeed(this.props.currentUser).then(response => {
      console.log("ALL POSTS in NEWSFEED: ", response.data);
      this.setState({ postsToRender: response.data });
    });
  }

  render() {
    const { postsToRender } = this.state;
    console.log("IN THE RENDER OF NEWSFEED BIIIIIH! : ", postsToRender);

    return (
      <section className="Newsfeed">
        <h3>Newsfeed</h3>
        {postsToRender.map(onePost => {
          return (
            <PostDetailPage
              currentUser={this.props.currentUser}
              postInfo={onePost}
            />
          );
        })}
      </section>
    );
  }
}

export default Newsfeed;
