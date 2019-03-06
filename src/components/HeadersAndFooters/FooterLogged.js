import React, { Component } from "react";

import homeempty from "../../images/homeempty.png";
import searchempty from "../../images/searchempty.png";
import likeempty from "../../images/likeempty.png";
import profileempty from "../../images/profileempty.png";
import TakePhotoPage from "../Pages/TakePhotoPage.js";

import "./FooterLogged.css";

class FooterLogged extends Component {
  render() {
    return (
      <div className="FooterLogged">
        <div className="home">
          <button class="buton">
            <img src={homeempty} alt="home icon" className="okbutton" />
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
            <img src={profileempty} alt="profile icon" className="okbutton" />
          </button>
        </div>
      </div>
      // NEED TO LAUNCH THE CAMERA OR TO CHOOSE A PICTURE FROM THE IPHONE
      // NEED TO SEND THIS PICTURE UPLOADED TO THE NEXT PAGE TO EDIT/ADD FILTERS
    );
  }
}

export default FooterLogged;
