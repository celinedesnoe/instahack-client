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

  componentDidMount() {
    // fnc exported from api.js
    // queries to get a giant array of posts from each user someone is following
    // getNewsfeedPosts(this.props.currentUser).then(response => {
    //   console.log("ALL POSTS in NEWSFEED: ", response.data);
    //   console.log(this.props);
    //   this.setState({ postsToRender: response.data });
    // });
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
        console.log("NEXT 109 POSTS in NEWSFEED: ", response.data);
        if (response.data.length > 0) {
          var posts = self.state.postsAvailable;
          console.log("posts in IF: ", posts.length);

          response.data.map(oneResponse => {
            posts.push(oneResponse);
          });

          const newNext = self.state.postsToRender.length + posts.length;
          console.log("NEW NEXT: ", newNext);

          self.setState({
            postsAvailable: posts,
            nextIndex: newNext
          });
          // } else {
          //   self.setState({
          //     hasMoreItems: false
          //   });
        } else {
          console.log(
            "REMAINING POSTS: ",
            self.state.postsAvailable.length > 0
          );

          if (self.state.postsAvailable.length > 0) {
            const next10 = self.state.postsAvailable.splice(0, 10);

            // console.log("available: ", self.state.postsAvailable);
            // console.log("next 10: ", self.state.next10);

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

      // console.log("available: ", self.state.postsAvailable);
      // console.log("next 10: ", self.state.next10);

      next10.forEach(onePost => {
        self.state.postsToRender.push(onePost);
      });

      // console.log("to render: ", self.state.postsToRender);
      // console.log("avail length: ", self.state.postsAvailable.length);
      self.setState({ postsToRender: self.state.postsToRender });
    }
  }

  takePic() {
    return <TakePhotoPage />;
  }

  render() {
    // console.log("POSTS in NEWSFEED RENDER: ", this.state.postsToRender);
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
        {/* <header className="newsfeed-header">
          <img src={camera} alt="take a picture" />
          <img src={iglogo} alt="instagram logo" />
          <img src={plusprofile} alt="follow suggestions" />
        </header> */}

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
        {/* <Route path="/take-pic" component={TakePhotoPage} /> */}
      </section>
    );
  }
}

export default Newsfeed;
