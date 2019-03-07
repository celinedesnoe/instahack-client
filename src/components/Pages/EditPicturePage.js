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
    bw: ""
  };

  uploadChange() {
    fetch(this.state.bw)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "bw");
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

// import React, { Component } from "react";
// import { Link, Redirect, Route } from "react-router-dom";
// import { postPicture } from "../../api.js";

// import ProcessImage from "react-imgpro";
// import CrossBlack from "../../images/crossblack2.png";
// import EditPostDetailsPage from "./EditPostDetailsPage";

// import "./EditPicturePage.css";

// // #################################################
// // IN COMMENTED ARE THE FILTER THINGS
// // #################################################

// class EditPicturePage extends Component {
//   state = {
//     src: "",
//     err: null,
//     imageUploaded: "",
//     normal: true,
//     bw: false,
//     bwImg: "",
//     sepia: false,
//     normalize: false
//   };

//   uploadChange() {
//     fetch(this.state.bwImg)
//       .then(res => res.blob())
//       .then(blob => {
//         const file = new File([blob], "imageUploaded");
//         postPicture(file).then(response => {
//           this.setState({ imageUploaded: response.data.fileUrl });
//         });
//       });
//   }

//   render() {
//     console.log("Image received", this.props.props.location.state.image);
//     console.log(this.state.src);
//     const { imageUploaded } = this.state;
//     return (
//       <div className="EditPicturePage w-100">
//         {/* HEADER */}
//         <div className={`headerAge ${this.props.position}`}>
//           <a href="#!">
//             <img className="gocross" src={CrossBlack} alt="Arrow Go Back" />
//           </a>

//           <p className="newPhotoPost">New Photo Post</p>

//           <Link
//             className="link-next"
//             to={{
//               pathname: "/create/details/",
//               // state: { image: this.state.src }
//               state: { image: imageUploaded }
//             }}
//           >
//             Next
//           </Link>
//         </div>

//         <div className="square w-100">
//           <img
//             src={this.props.props.location.state.image}
//             alt="uploaded"
//             className="square-img"
//             onClick={() =>
//               this.setState({
//                 imageUploaded: this.props.props.location.state.image
//               })
//             }
//           />
//         </div>

//         <div className="One">
//           {this.state.bw ? (
//             <p>
//               <b>Black & White</b>
//             </p>
//           ) : (
//             <p>Black & White</p>
//           )}

//           <ProcessImage
//             image={this.props.props.location.state.image}
//             // resize={{ width: 200, height: 200, mode: "bicubic" }}
//             // crop={{ w: 200, h: 200, x: 20, y: 40 }}
//             cover={{ width: 100, height: 100, mode: "horizontal_center" }}
//             greyscale={true}
//             // colors={{
//             //   mix: {
//             //     color: "mistyrose",
//             //     amount: 20
//             //   }
//             // }}
//             processedImage={(src, err) => {
//               this.setState({ bwImg: src, err });
//               // this.uploadChange(src);
//             }}
//             onClick={() => {
//               this.uploadChange();
//               this.setState({ bw: true });
//             }}
//           />
//         </div>

//         <div className="One">
//           Sepia
//           <ProcessImage
//             image={this.props.props.location.state.image}
//             // resize={{ width: 200, height: 200, mode: "bicubic" }}
//             // crop={{ w: 200, h: 200, x: 20, y: 40 }}
//             cover={{ width: 100, height: 100, mode: "horizontal_center" }}
//             sepia={true}
//             // colors={{
//             //   mix: {
//             //     color: "mistyrose",
//             //     amount: 20
//             //   }
//             // }}
//             processedImage={(src, err) => {
//               this.setState({ imageUploaded: src, err });
//               // this.uploadChange(src);
//             }}
//             onClick={() => this.uploadChange()}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default EditPicturePage;
