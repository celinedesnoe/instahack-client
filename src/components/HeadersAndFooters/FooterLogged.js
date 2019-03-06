import React, { Component } from "react";

import homeblack from "../../images/homeblack.png";
import searchblack from "../../images/searchblack.png";
import plusblack from "../../images/plusblack.png";
import likeblack from "../../images/like2black.png";
import profileblack from "../../images/profileblack.png";

import "./FooterLogged.css";

class FooterLogged extends Component {
  render() {
    return (
      <div className="FooterLogged">
        <div className="home">
          <button class="buton">
            <img src={homeblack} alt="home icon" className="okbutton" />
          </button>
        </div>

        <div className="search">
          <button class="buton">
            <img src={searchblack} alt="search icon" className="okbutton" />
          </button>
        </div>

        <div className="plus">
          <form className="upload-btn-wrapper home">
            <input class="edit-button" type="file" />
            <button class="buton">
              <img src={plusblack} alt="profile icon" className="okbutton" />
            </button>
          </form>
        </div>

        <div className="likes">
          <button class="buton">
            <img src={likeblack} alt="like icon" className="okbutton" />
          </button>
        </div>

        <div className="profile">
          <button class="buton">
            <img src={profileblack} alt="profile icon" className="okbutton" />
          </button>
        </div>
      </div>
      // NEED TO LAUNCH THE CAMERA OR TO CHOOSE A PICTURE FROM THE IPHONE
      // NEED TO SEND THIS PICTURE UPLOADED TO THE NEXT PAGE TO EDIT/ADD FILTERS
    );
  }
}

export default FooterLogged;
