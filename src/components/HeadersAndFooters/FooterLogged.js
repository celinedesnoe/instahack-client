import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

import homeempty from "../../images/homeempty.png";
import homefull from "../../images/homefull.png";
import searchempty from "../../images/searchempty.png";
import likeempty from "../../images/likeempty.png";
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
      homed: false
    };
  }

  home(event) {
    this.setState({ homed: true });
  }

  onClick(event) {}

  render() {
    return (
      <div className="FooterLogged">
        <div className="home">
          <button class="buton">
            {<Newsfeed /> ? (
              <img src={homefull} alt="home icon" className="okbutton" />
            ) : (
              <img src={homeempty} alt="home icon" className="okbutton" />
            )}
          </button>
        </div>

        <div className="search">
          <button class="buton">
            <img src={searchempty} alt="search icon" className="okbutton" />
          </button>
        </div>

        <div className="plus">
          <TakePhotoPage />
        </div>

        <div className="likes">
          <button class="buton">
            <img src={likeempty} alt="like icon" className="okbutton" />
          </button>
        </div>

        <div className="profile">
          <button class="buton">
            {<Profile /> ? (
              <img src={profilefull} alt="profile icon" className="okbutton" />
            ) : (
              <img src={profileempty} alt="profile icon" className="okbutton" />
            )}
          </button>
        </div>
      </div>
      // NEED TO LAUNCH THE CAMERA OR TO CHOOSE A PICTURE FROM THE IPHONE
      // NEED TO SEND THIS PICTURE UPLOADED TO THE NEXT PAGE TO EDIT/ADD FILTERS
    );
  }
}

export default FooterLogged;
