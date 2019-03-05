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
        {/* <div>
          <h2>TAKE PHOTO COMPONENT</h2>

          <form className=" upload-btn-wrapper">
            <input
              class="edit-button"
              type="file"
              onChange={event => this.uploadChange(event)}
            />
            <button class="btn">
              <img src="" alt="profile icon" />
              CAMERA
            </button>
          </form>
        </div>

        <img src={image} /> */}

        {image === "" ? (
          <div>
            <h2>TAKE PHOTO COMPONENT</h2>

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
          // <Redirect
          //   exact
          //   path="/create/style/"
          //   render={() => {
          //     return (
          //       <EditPicturePage
          //         currentUser={this.state.currentUser}
          //         image={image}
          //       />
          //     );
          //   }}
          // />

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
