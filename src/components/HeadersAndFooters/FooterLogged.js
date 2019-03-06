import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

import homeempty from "../../images/homeempty.png";
import homefull from "../../images/homefull.png";
import searchempty from "../../images/searchempty.png";
import searchfull from "../../images/searchfull.png";
import likeempty from "../../images/likeempty.png";
import likefull from "../../images/likefull.png";
import profileempty from "../../images/profileempty.png";
import profilefull from "../../images/profilefull.png";

import Newsfeed from "../Pages/NewsfeedPage.js";
import Profile from "../Pages/ProfilePage.js";
import TakePhotoPage from "../Pages/TakePhotoPage.js";

import "./FooterLogged.css";

class FooterLogged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homed: false,
      searched: false,
      liked: false,
      profiled: false
    };
  }
  //   <img src={homefull} alt="home icon" className="okbutton" />
  //   <img src={profilefull} alt="profile icon" className="okbutton" />

  colouredHome() {
    this.setState({
      homed: true,
      searched: false,
      liked: false,
      profiled: false
    });
  }

  colouredSearch() {
    this.setState({
      searched: true,
      homed: false,
      liked: false,
      profiled: false
    });
  }

  colouredLike() {
    this.setState({
      liked: true,
      homed: false,
      searched: false,
      profiled: false
    });
  }

  colouredProfile() {
    this.setState({
      profiled: true,
      homed: false,
      searched: false,
      liked: false
    });
  }

  render() {
    return (
      <div className="FooterLogged">
        <div className="home">
          {this.state.homed ? (
            <button class="buton">
              <img
                onClick={event => this.colouredHome(event)}
                // className="Unlike"
                src={homefull}
                alt="home empty"
                className="okbutton"
              />
              <Redirect to="/" />
            </button>
          ) : (
            <button class="buton">
              <img
                onClick={event => this.colouredHome(event)}
                // className="Like"
                src={homeempty}
                alt="home full"
                className="okbutton"
              />
            </button>
          )}
        </div>

        <div className="search">
          {this.state.searched ? (
            <button class="buton">
              <img
                onClick={event => this.colouredSearch(event)}
                // className="Unlike"
                src={searchfull}
                alt="search empty"
                className="okbutton"
              />
              <Redirect to="/accounts/signup" />
            </button>
          ) : (
            <button class="buton">
              <img
                onClick={event => this.colouredSearch(event)}
                // className="Like"
                src={searchempty}
                alt="search full"
                className="okbutton"
              />
            </button>
          )}
        </div>

        <div className="plus">
          <TakePhotoPage />
        </div>

        <div className="likes">
          {this.state.liked ? (
            <button class="buton">
              <img
                onClick={event => this.colouredLike(event)}
                src={likefull}
                alt="like empty"
                className="okbutton"
              />
              <Redirect to="/accounts/login" />
            </button>
          ) : (
            <button class="buton">
              <img
                onClick={event => this.colouredLike(event)}
                src={likeempty}
                alt="like full"
                className="okbutton"
              />
            </button>
          )}
        </div>

        <div className="profile">
          {this.state.profiled ? (
            <button class="buton">
              <img
                onClick={event => this.colouredProfile(event)}
                src={profilefull}
                alt="profile empty"
                className="okbutton"
              />
              <Redirect to={`/${this.props.currentUser.username}`} />
            </button>
          ) : (
            <button class="buton">
              <img
                onClick={event => this.colouredProfile(event)}
                src={profileempty}
                alt="profile full"
                className="okbutton"
              />
            </button>
          )}
        </div>
      </div>
      // NEED TO LAUNCH THE CAMERA OR TO CHOOSE A PICTURE FROM THE IPHONE
      // NEED TO SEND THIS PICTURE UPLOADED TO THE NEXT PAGE TO EDIT/ADD FILTERS
    );
  }
}

export default FooterLogged;
