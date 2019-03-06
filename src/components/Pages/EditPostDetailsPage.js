import React, { Component } from "react";
import ProfilePic from "../General/ProfilePic.js";
import { Link } from "react-router-dom";
import { newPost } from "../../api.js";
import ArrowGoBack from "../../images/arrowbackbold.png";

import "./EditPostDetailsPage.css";

class EditPostDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username_id: "",
      image: "",
      caption: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      username_id: this.props.currentUser._id,
      image: this.props.props.location.state.image
    });
  }

  save(event) {
    newPost(this.state).then(response => {
      console.log("new post ", response.data);
    });
  }

  render() {
    console.log("STATE", this.state);
    console.log("PROPS", this.props.props);
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
              className="col-3 w-100 contain-img"
            />
            {/* TO PUT IN THE HEADER */}
          </div>
        </div>
      </div>
    );
  }
}

export default EditPostDetailsPage;