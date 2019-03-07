import React, { Component } from "react";
import { getNewsfeedPosts } from "../../api.js";

import "./NewsfeedPage.css";
import PostDetailPage from "./PostDetailPage.js";
import optionpicture from "../../images/optionpicture.png";
import iglogo from "../../images/iglogo.png";
import plusprofile from "../../images/plusprofile.png";

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
    // console.log("POSTS in NEWSFEED RENDER: ", this.state.postsToRender);

    return (
      <section className="Newsfeed">
        <header className="newsfeed-header">
          <img src={optionpicture} alt="options" />
          <img src={iglogo} alt="instagram logo" />
          <img src={plusprofile} alt="follow suggestions" />
        </header>

        {this.state.postsToRender.map(onePost => {
          return (
            <PostDetailPage
              className="newsfeed-post"
              key={onePost.id}
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
