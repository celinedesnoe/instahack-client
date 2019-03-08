import React, { Component } from "react";
import ProfilePic from "../General/ProfilePic.js";
import { Link } from "react-router-dom";
import { newPost } from "../../api.js";
import ArrowGoBack from "../../images/arrowbackbold.png";
import ArrowNextLightGreyEmpty from "../../images/arrownextlightgreyempty.png";

import "./EditPostDetailsPage.css";

class EditPostDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username_id: "",
      image: "",
      caption: "",
      style: ""
    };
  }

  componentDidMount() {
    this.setState({
      username_id: this.props.currentUser._id,
      image: this.props.props.location.state.image,
      style: this.props.props.location.state.style
    });
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      username_id: this.props.currentUser._id,
      image: this.props.props.location.state.image,
      style: this.props.props.location.state.style
    });
  }

  save(event) {
    newPost(this.state).then(response => {
      console.log("new post ", response.data);
    });
  }

  render() {
    // console.log("STATE", this.state);
    // console.log("PROPS", this.props);
    console.log("STYLE", this.props.props.location.state);
    return (
      <div className="EditPostDetailsPage w-100">
        {/* HEADER */}
        <div className={`headerAge ${this.props.position}`}>
          <a href={this.props.link}>
            <img className="arrow-back" src={ArrowGoBack} alt="Arrow Go Back" />
          </a>

          <p className="newPhotoPost">New Post</p>

          <Link
            onClick={event => this.save(event)}
            to={`/`}
            className="link-next"
          >
            Share
          </Link>
        </div>

        <div className="margin-top container">
          <div className="row row-margin">
            <div className="col-9 d-flex">
              <ProfilePic
                profilePic={this.props.currentUser.profilePic}
                size="profile-row"
              />
              <textarea
                class="caption-input caption-margin-left"
                onChange={event => this.genericOnChange(event)}
                type="text"
                rows="1"
                name="caption"
                placeholder="Write a caption..."
              />
            </div>

            <img
              src={this.props.props.location.state.image}
              alt="uploaded"
              className={`col-3 w-100 contain-img ${this.state.style}`}
            />

            <div className="d-flex column w-100 m-t-20">
              <div className="container">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between align-items-center laura">
                    <p className="sizepLaura">Add location</p>
                    <img
                      src={ArrowNextLightGreyEmpty}
                      alt="arrow"
                      className="sizeArrowLaura"
                    />
                  </div>

                  <div className="col-12 d-flex justify-content-between align-items-center laura">
                    <p className="sizepLaura">Tag People</p>
                    <img
                      src={ArrowNextLightGreyEmpty}
                      alt="arrow"
                      className="sizeArrowLaura"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPostDetailsPage;
