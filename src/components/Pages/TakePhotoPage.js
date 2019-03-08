import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { postPicture } from "../../api.js";
import EditPicturePage from "../Pages/EditPicturePage.js";
import plus from "../../images/plus.png";
import camera from "../../images/cameralinebold.png";

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
    postPicture(files[0]).then(response => {
      this.setState({
        [name]: response.data.fileUrl,
        width: response.data.fileUrl,
        height: response.data.height
      });
      console.log(response.data);
    });
  }

  resetImage() {
    this.setState({ image: "" });
  }

  render() {
    const { image } = this.state;
    const { icon } = this.props;
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
            <div class="buton">
              <img
                src={icon === "camera" ? camera : plus}
                alt="profile icon"
                className="okbutton"
              />
            </div>
            {/* </form> */}
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/create/style/",
              state: {
                image: this.state.image,
                width: this.state.width,
                height: this.state.height,
                resetImage: this.resetImage()
              }
            }}
          />
        )}

        {/* <input type="file" accept="image/*" capture="camera" /> */}
      </section>
    );
  }
}

export default TakePhotoPage;
