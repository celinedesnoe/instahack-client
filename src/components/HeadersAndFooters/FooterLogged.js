import React, { Component } from "react";

import "./FooterLogged.css";
import homeblack from "../../images/homeblack.png";
import searchblack from "../../images/searchblack.png";
import plusblack from "../../images/plusblack.png";
import likeblack from "../../images/like2black.png";

class FooterLogged extends Component {
  render() {
    return (
      <div className="FooterLogged">
        <form className="upload-btn-wrapper">
          <div className="home">
            <button class="btn">
              <img src={homeblack} alt="home icon" />
            </button>
          </div>

          <div className="search">
            <button class="btn">
              <img src={searchblack} alt="search icon" />
            </button>
          </div>

          <div className="plus">
            <input class="edit-button" type="file" />
            <button class="btn">
              <img src={plusblack} alt="profile icon" />
            </button>
          </div>

          <div className="likes">
            <button class="btn">
              <img src={likeblack} alt="like icon" />
            </button>
          </div>

          <div className="profile">
            <button class="btn">
              <img src={searchblack} alt="profile icon" />
            </button>
          </div>
        </form>
      </div>
      // NEED TO LAUNCH THE CAMERA OR TO CHOOSE A PICTURE FROM THE IPHONE
      // NEED TO SEND THIS PICTURE UPLOADED TO THE NEXT PAGE TO EDIT/ADD FILTERS
    );
  }
}

export default FooterLogged;
