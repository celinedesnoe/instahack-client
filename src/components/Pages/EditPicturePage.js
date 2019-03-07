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
    image: "",
    bw: "",
    bwSelect: false,
    sp: "",
    spSelect: false,
    normalSelect: false
  };

  // componentDidMount() {
  //   this.props.props.location.state.resetImage();
  // }

  uploadChangeBW() {
    fetch(this.state.bw)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "bw");
        postPicture(file).then(response => {
          this.setState({ image: response.data.fileUrl });
        });
      });
  }

  uploadChangeSepia() {
    fetch(this.state.sp)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "sp");
        postPicture(file).then(response => {
          this.setState({ image: response.data.fileUrl });
        });
      });
  }

  render() {
    console.log("Image received", this.props.props.location.state.image);
    // console.log(this.state.src);
    console.log("IMAGE ABOUT TO SEND", this.state.image);
    const { image } = this.state;
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
              state: { image: image }
            }}
          >
            Next
          </Link>
        </div>

        <div className="square w-100 m-top-45">
          <img
            src={this.props.props.location.state.image}
            alt="uploaded"
            className="square-img"
            onClick={() =>
              this.setState({
                image: this.props.props.location.state.image
              })
            }
          />
        </div>

        <div className="d-flex row justify-content-around filters-row">
          <div className="oneFilter">
            {this.state.normalSelect ? (
              <p>
                <b>Normal</b>
              </p>
            ) : (
              <p>Normal</p>
            )}
            <ProcessImage
              image={this.props.props.location.state.image}
              cover={{ width: 100, height: 100, mode: "horizontal_center" }}
              quality={95}
              // processedImage={(src, err) => {
              //   this.setState({ bw: src, err });
              // }}
              onClick={() => {
                // this.uploadChangeBW();
                this.setState({
                  image: this.props.props.location.state.image,
                  normalSelect: true
                });
              }}
            />
          </div>

          <div className="oneFilter">
            {this.state.bwSelect ? (
              <p>
                <b>Black & White</b>
              </p>
            ) : (
              <p>Black & White</p>
            )}
            <ProcessImage
              image={this.props.props.location.state.image}
              cover={{ width: 100, height: 100, mode: "horizontal_center" }}
              quality={95}
              greyscale={true}
              processedImage={(src, err) => {
                this.setState({ bw: src, err });
              }}
              onClick={() => {
                this.uploadChangeBW();
                this.setState({ bwSelect: true });
              }}
              className="oneFilter-fit"
            />
          </div>

          <div className="oneFilter">
            {this.state.spSelect ? (
              <p>
                <b>Sepia</b>
              </p>
            ) : (
              <p>Sepia</p>
            )}
            <ProcessImage
              image={this.props.props.location.state.image}
              cover={{ width: 100, height: 100, mode: "horizontal_center" }}
              quality={95}
              sepia={true}
              processedImage={(src, err) => {
                this.setState({ sp: src, err });
              }}
              onClick={() => {
                this.uploadChangeSepia();
                this.setState({ spSelect: true });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EditPicturePage;
