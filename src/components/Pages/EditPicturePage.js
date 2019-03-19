import React, { Component } from "react";
import { Link } from "react-router-dom";
import { postPicture } from "../../api.js";

import CrossBlack from "../../images/crossblack2.png";

import "./EditPicturePage.css";

class EditPicturePage extends Component {
  state = {
    src: "",
    err: null,
    image: "",
    bw: "",
    bwSelect: false,
    sp: "",
    spSelect: false,
    normalSelect: true,
    style: ""
  };

  componentDidMount() {
    this.setState({ image: this.props.props.location.state.image });
  }

  uploadChange() {
    postPicture(this.props.props.location.state.image).then(response => {
      this.setState({ image: response.data.fileUrl });
    });
    console.log(this.state.image);
  }

  render() {
    console.log("Image received", this.props.props.location.state.image);
    // console.log(this.state.src);
    console.log("IMAGE ABOUT TO SEND", this.state.image);
    const { image, style } = this.state;
    return (
      <div className="EditPicturePage w-100">
        {/* HEADER */}
        <div className={`headerAge ${this.props.position}`}>
          <a href="/">
            <img className="gocross" src={CrossBlack} alt="Arrow Go Back" />
          </a>

          <p className="newPhotoPost">New Photo Post</p>

          <Link
            className="link-next"
            to={{
              pathname: "/create/details/",
              state: { image: image, style: style }
            }}
          >
            Next
          </Link>
        </div>

        <div className="square w-100 m-top-45 no-padding d-flex justify-content-around">
          {/* ********** WITHOUT CONDITION ***************** */}

          <img
            src={this.props.props.location.state.image}
            width="375"
            height="375"
            className={`object-fit  ${this.state.style}`}
            alt="sepia"
            onClick={() => {
              this.setState({
                spSelect: false,
                bwSelect: false,
                normalSelect: true
              });
            }}
          />
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

            <img
              src={this.props.props.location.state.image}
              width="100"
              height="100"
              className="normal-mode object-fit"
              alt="sepia"
              onClick={() => {
                this.setState({
                  spSelect: false,
                  bwSelect: false,
                  normalSelect: true,
                  style: "",
                  image: this.props.props.location.state.image
                });
              }}
            />

            {/* <ProcessImage
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
            /> */}
          </div>

          <div className="oneFilter">
            {this.state.bwSelect ? (
              <p>
                <b>Black & White</b>
              </p>
            ) : (
              <p>Black & White</p>
            )}

            <img
              src={this.props.props.location.state.image}
              width="100"
              height="100"
              className="bw-mode object-fit"
              alt="bw"
              onClick={() => {
                this.setState({
                  spSelect: false,
                  bwSelect: true,
                  normalSelect: false,
                  style: "bw-mode",
                  image: this.props.props.location.state.image
                });
              }}
            />

            {/* <ProcessImage
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
            /> */}
          </div>

          <div className="oneFilter">
            {this.state.spSelect ? (
              <p>
                <b>Sepia</b>
              </p>
            ) : (
              <p>Sepia</p>
            )}

            <img
              src={this.props.props.location.state.image}
              width="100"
              height="100"
              className="sepia-mode object-fit"
              alt="sepia"
              onClick={() => {
                this.setState({
                  spSelect: true,
                  bwSelect: false,
                  normalSelect: false,
                  style: "sepia-mode",
                  image: this.props.props.location.state.image
                });
              }}
            />

            {/* <ProcessImage
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
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default EditPicturePage;
