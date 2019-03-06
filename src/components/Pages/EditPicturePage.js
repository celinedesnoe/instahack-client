import React, { Component } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { postPicture } from "../../api.js";

import ProcessImage from "react-imgpro";

import "./EditPicturePage.css";
import EditPostDetailsPage from "./EditPostDetailsPage";

// #################################################
// IN COMMENTED ARE THE FILTER THINGS
// #################################################

class EditPicturePage extends Component {
  // state = {
  //   src: "",
  //   err: null
  // };

  // uploadChange(event) {
  //   const { name, files } = event.target;
  //   postPicture(files[0]).then(response => {
  //     this.setState({ [name]: response.data.fileUrl });
  //   });
  // }

  render() {
    console.log("Image received", this.props.props.location.state.image);
    // console.log(this.state.src);
    return (
      <div className="EditPicturePage">
        <div>
          {/* TO PUT IN THE NAV BAR */}
          <Link
            to={{
              pathname: "/create/details/",
              // state: { image: this.state.src }
              state: { image: this.props.props.location.state.image }
            }}
          >
            NEXT
          </Link>

          <img src={this.props.props.location.state.image} alt="uploaded" />

          {/* <ProcessImage
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
            processedImage={(src, err) => this.setState({ src, err })}
          /> */}
        </div>
      </div>
    );
  }
}

export default EditPicturePage;
