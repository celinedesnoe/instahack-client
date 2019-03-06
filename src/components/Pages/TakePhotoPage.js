import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { postPicture } from "../../api.js";
import EditPicturePage from "../Pages/EditPicturePage.js";

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
          <div>
            <form className=" upload-btn-wrapper">
              <input
                class="edit-button"
                type="file"
                onChange={event => this.uploadChange(event)}
                name="image"
              />
              <button class="btn">
                <img src="" alt="profile icon" />
                CAMERA
              </button>
            </form>
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/create/style/",
              state: { image: this.state.image }
            }}
          />
        )}

        {/* Photo input */}
        {/* <label>
          take a photo
          <input type="file" accept="image/*" capture="camera" />
        </label> */}
      </section>
    );
  }
}

export default TakePhotoPage;
