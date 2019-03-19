import React, { Component } from "react";
import { getNewsfeedPosts } from "../../api.js";
import InfiniteScroll from "react-infinite-scroller";

import "./NewsfeedPage.css";
import PostDetailPage from "./PostDetailPage.js";
import iglogo from "../../images/iglogo.png";
import plusprofile from "../../images/plusprofile.png";
import NewsfeedEmptyPage from "./NewsfeedEmptyPage.js";
import TakePhotoPage from "./TakePhotoPage.js";

class Newsfeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsAvailable: [],
      postsToRender: [],
      hasMoreItems: true,
      nextIndex: null,
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true
    });
  }

  loadItems(page) {
    var self = this;

    if (self.state.postsAvailable.length < 10) {
      getNewsfeedPosts({
        user: this.props.currentUser,
        nextIndex: this.state.nextIndex
      }).then(response => {
        if (response.data.length > 0) {
          var posts = self.state.postsAvailable;

          response.data.map(oneResponse => {
            posts.push(oneResponse);
          });

          const newNext = self.state.postsToRender.length + posts.length;

          self.setState({
            postsAvailable: posts,
            nextIndex: newNext
          });
        } else {
          console.log(
            "REMAINING POSTS: ",
            self.state.postsAvailable.length > 0
          );

          if (self.state.postsAvailable.length > 0) {
            const next10 = self.state.postsAvailable.splice(0, 10);

            next10.forEach(onePost => {
              self.state.postsToRender.push(onePost);
            });

            self.setState({
              postsToRender: self.state.postsToRender
            });
          } else {
            self.setState({
              hasMoreItems: false
            });
          }
        }
      });
    } else {
      const next10 = self.state.postsAvailable.splice(0, 10);

      next10.forEach(onePost => {
        self.state.postsToRender.push(onePost);
      });

      self.setState({ postsToRender: self.state.postsToRender });
    }
  }

  takePic() {
    return <TakePhotoPage />;
  }

  render() {
    const loader = (
      <div className="loader" key={0}>
        Loading ...
      </div>
    );

    let items = [];
    this.state.postsToRender.map(onePost => {
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
      <section className="Newsfeed w-100">
        <header className="newsfeed-header">
          <TakePhotoPage icon="camera" />
          <img src={iglogo} alt="instagram logo" />
          <img src={plusprofile} alt="follow suggestions" />
        </header>

        {this.props.currentUser.following.length > 0 ? (
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadItems.bind(this)}
            hasMore={this.state.hasMoreItems}
            loader={loader}
            initialLoad={true}
          >
            <div className="newsfeed">{items}</div>
          </InfiniteScroll>
        ) : (
          <NewsfeedEmptyPage
            currentUser={this.props.currentUser}
            onFollowCurrentUser={this.props.onFollowCurrentUser}
          />
        )}
      </section>
    );
  }
}

export default Newsfeed;
