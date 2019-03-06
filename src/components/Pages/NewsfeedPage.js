import React, { Component } from "react";
import { getNewsfeedPosts } from "../../api.js";

import "./NewsfeedPage.css";
import PostDetailPage from "./PostDetailPage.js";
import HeaderLogged from "../HeadersAndFooters/HeaderLogged.js";
import HeaderCross from "../HeadersAndFooters/HeaderCross.js";
import HeaderInstagram from "../HeadersAndFooters/HeaderInstagram.js";
import HeaderLanguage from "../HeadersAndFooters/HeaderLanguage.js";
import GearImage from "../../images/optionpicture.png";
import { plusprofile } from "../../images/plusprofile.png";

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
        <header className={`header ${this.props.position}`}>
          <p className="nop">
            <a href="#">
              {/* this should link to the camera / post route */}
              <img className="optionss" src={GearImage} alt="show options" />
            </a>
          </p>

          <p className="text-profile">{this.props.text}</p>

          <p className="nope">
            <a href={this.props.link}>
              <img
                className="optionsss"
                src={plusprofile}
                alt="add a profile"
              />
            </a>
          </p>
        </header>
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
