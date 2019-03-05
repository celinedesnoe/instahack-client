import React, { Component } from "react";

import "./FooterLogged.css";
import profilewhite from "../../images/profilewhite.png";

class FooterLogged extends Component {
  render() {
    return (
      <div className="FooterLogged">
        FOOTER LOGGED
        <form className=" upload-btn-wrapper">
          <input class="edit-button" type="file" />
          <button class="btn">
            {" "}
            <img src={profilewhite} alt="profile icon" />
            CAMERA
          </button>
        </form>
      </div>
      // NEED TO LAUNCH THE CAMERA OR TO CHOOSE A PICTURE FROM THE IPHONE
      // NEED TO SEND THIS PICTURE UPLOADED TO THE NEXT PAGE TO EDIT/ADD FILTERS
    );
  }
}

export default FooterLogged;
