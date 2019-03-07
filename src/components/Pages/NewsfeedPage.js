import React, { Component } from "react";
import { getNewsfeedPosts } from "../../api.js";
import InfiniteScroll from "react-infinite-scroller";

import "./NewsfeedPage.css";
import PostDetailPage from "./PostDetailPage.js";
import optionpicture from "../../images/optionpicture.png";
import iglogo from "../../images/iglogo.png";
import plusprofile from "../../images/plusprofile.png";

class Newsfeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasMoreItems: true
    };
  }

  componentDidMount() {
    // fnc exported from api.js
    // queries to get a giant array of posts from each user someone is following
    getNewsfeedPosts(this.props.currentUser).then(response => {
      console.log("ALL POSTS in NEWSFEED: ", response.data);
      console.log(this.props);

      // this.state.postsToRender.unshift(response.data);
      this.setState({ postsToRender: response.data });
    });
  }

  loadItems(page) {
    var self = this;

    getNewsfeedPosts(this.props.currentUser).then(response => {
      console.log("ALL POSTS in NEWSFEED: ", response.data);
      if (response) {
        var posts = self.state.posts;

        response.data.map(onePost => {
          posts.push(onePost);
        });
      }
    });
  }

  render() {
    // console.log("POSTS in NEWSFEED RENDER: ", this.state.postsToRender);
    const loader = (
      <div className="loader" key={0}>
        Loading ...
      </div>
    );

    let items = [];
    this.state.posts.map(onePost => {
      items.push(
        <PostDetailPage
          className="newsfeed-post"
          key={onePost.id}
          postInfo={onePost}
          currentUser={this.props.currentUser}
          rerouteUrl={this.props.rerouteUrl}
        />
      );
    });

    return (
      <section className="Newsfeed">
        <header className="newsfeed-header">
          <img src={optionpicture} alt="options" />
          <img src={iglogo} alt="instagram logo" />
          <img src={plusprofile} alt="follow suggestions" />
        </header>

        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >
          <div className="newsfeed">{items}</div>
        </InfiniteScroll>
      </section>
    );
  }
}

export default Newsfeed;
