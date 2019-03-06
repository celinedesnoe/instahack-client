import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { postPicture } from "../../api.js";
import EditPicturePage from "../Pages/EditPicturePage.js";
import plusblack from "../../images/plusblack.png";

import "./TakePhotoPage.css";

class TakePhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }
  uploadChange(event) {
    const { name, files } = event.target;
    postPicture(files).then(response => {
      this.setState({ [name]: response.data.fileUrl });
    });
  }

  render() {
    const { image } = this.state;
    console.log(image);
    return (
      <section className="TakePhoto">
        {image === "" ? (
          <div className="upload-btn-wrapper">
            {/* <form className=" upload-btn-wrapper"> */}
            <input
              class="edit-button"
              type="file"
              onChange={event => this.uploadChange(event)}
              name="image"
            />
            <button class="btn">
              <img src={plusblack} alt="profile icon" className="okbutton" />
            </button>
            {/* </form> */}
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/create/style/",
              state: { image: this.state.image }
            }}
          />
        )}

        {/* <input type="file" accept="image/*" capture="camera" /> */}
      </section>
    );
  }
}

export default TakePhotoPage;
