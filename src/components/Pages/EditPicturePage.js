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
    normalSelect: true
  };

  uploadChange() {
    fetch(this.state.image)
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
          {/* ********** WITHOUT CONDITION ***************** */}
          {/* <ProcessImage
            className="square-img w-100 height-limit"
            image={this.props.props.location.state.image}
            cover={{
              width: 375,
              height: 375,
              // width: this.props.props.location.state.width,
              // height: 100,
              mode: "horizontal_center"
            }}
            greyscale={this.state.bwSelect}
            sepia={this.state.spSelect}
            processedImage={(src, err) => {
              this.setState({ image: src, err });
            }}
          /> */}
          {/* ************ WITH CONDITION ******************* */}
          {this.state.normalSelect && (
            <ProcessImage
              className="square-img w-100 height-limit"
              image={this.props.props.location.state.image}
              cover={{
                width: 375,
                height: 375,
                // width: this.props.props.location.state.width,
                // height: 100,
                mode: "horizontal_center"
              }}
              processedImage={(src, err) => {
                this.setState({ image: src, err });
              }}
            />
          )}
          {this.state.bwSelect && (
            <ProcessImage
              className="square-img w-100 height-limit"
              image={this.props.props.location.state.image}
              cover={{
                width: 375,
                height: 375,
                // width: this.props.props.location.state.width,
                // height: 100,
                mode: "horizontal_center"
              }}
              greyscale={true}
              processedImage={(src, err) => {
                this.setState({ image: src, err });
              }}
            />
          )}
          {this.state.spSelect && (
            <ProcessImage
              className="square-img w-100 height-limit"
              image={this.props.props.location.state.image}
              cover={{
                width: 375,
                height: 375,
                // width: this.props.props.location.state.width,
                // height: 100,
                mode: "horizontal_center"
              }}
              sepia={true}
              processedImage={(src, err) => {
                this.setState({ image: src, err });
              }}
            />
          )}
          }
        </div>

        {/* 3 FILTERS - MINIATURES */}

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
              onClick={() => {
                this.setState({
                  normalSelect: true,
                  bwSelect: false,
                  spSelect: false
                });
                this.uploadChange();
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
                this.setState({
                  bwSelect: true,
                  normalSelect: false,
                  spSelect: false
                });
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
                this.setState({
                  spSelect: true,
                  bwSelect: false,
                  normalSelect: false
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EditPicturePage;
