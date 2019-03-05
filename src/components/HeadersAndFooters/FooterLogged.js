import React, { Component } from "react";

class FooterLogged extends Component {
  render() {
    return (
      <div>
        FOOTER LOGGED
        <input type="file" accept="image/*" capture="camera" />
        <input
          onChange={event => this.uploadOnChange(event)}
          name="image"
          type="file"
        />
      </div>
      // NEED TO LAUNCH THE CAMERA OR TO CHOOSE A PICTURE FROM THE IPHONE
      // NEED TO SEND THIS PICTURE UPLOADED TO THE NEXT PAGE TO EDIT/ADD FILTERS
    );
  }
}

export default FooterLogged;
