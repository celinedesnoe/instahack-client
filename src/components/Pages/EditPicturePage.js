import React, { Component } from "react";

import "./EditPicturePage.css";

class EditPicturePage extends Component {
  render() {
    console.log("Image received", this.props.props.location.state.image);
    return (
      <div>
        EDIT PICTURE PAGE
        <img src={this.props.props.location.state.image} alt="uploaded" />
      </div>
    );
  }
}

export default EditPicturePage;
