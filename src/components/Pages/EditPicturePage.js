import React, { Component } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { postPicture } from "../../api.js";

import ProcessImage from "react-imgpro";
import CrossBlack from "../../images/crossblack2.png";
import EditPostDetailsPage from "./EditPostDetailsPage";

import "./EditPicturePage.css";

// #################################################
// IN COMMENTED ARE THE FILTER THINGS
// #################################################

class EditPicturePage extends Component {
  state = {
    src: "",
    err: null,
    imageUploaded: "",
    bw: ""
  };

  uploadChange() {
    fetch(this.state.bw)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "bw");
        postPicture(file).then(response => {
          this.setState({ imageUploaded: response.data.fileUrl });
        });
      });
  }

  render() {
    console.log("Image received", this.props.props.location.state.image);
    console.log(this.state.src);
    const { imageUploaded } = this.state;
    return (
      <div className="EditPicturePage w-100">
        {/* HEADER */}
        <div className={`headerAge ${this.props.position}`}>
          <a href="#!">
            <img className="gocross" src={CrossBlack} alt="Arrow Go Back" />
          </a>

          <p className="newPhotoPost">New Photo Post</p>

          <Link
            className="link-next"
            to={{
              pathname: "/create/details/",
              // state: { image: this.state.src }
              state: { image: imageUploaded }
            }}
          >
            Next
          </Link>
        </div>

        <div className="square w-100">
          <img
            src={this.props.props.location.state.image}
            alt="uploaded"
            className="square-img"
            onClick={() =>
              this.setState({
                imageUploaded: this.props.props.location.state.image
              })
            }
          />
        </div>

        <div>
          Black & White
          <ProcessImage
            image={this.props.props.location.state.image}
            // resize={{ width: 200, height: 200, mode: "bicubic" }}
            // crop={{ w: 200, h: 200, x: 20, y: 40 }}
            cover={{ width: 200, height: 200, mode: "horizontal_center" }}
            greyscale={true}
            // colors={{
            //   mix: {
            //     color: "mistyrose",
            //     amount: 20
            //   }
            // }}
            processedImage={(src, err) => {
              this.setState({ bw: src, err });
              // this.uploadChange(src);
            }}
            onClick={() => this.uploadChange()}
          />
          {/* <button onClick={() => this.uploadChange()}>SEND BW </button> */}
        </div>
      </div>
    );
  }
}

export default EditPicturePage;
