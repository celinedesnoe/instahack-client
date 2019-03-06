import React, { Component } from "react";
import ProfilePic from "../General/ProfilePic.js";
import { Link } from "react-router-dom";
import { newPost } from "../../api.js";

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
      <div className="EditPostDetailsPage">
        Edit post detail page
        <ProfilePic
          profilePic={this.props.currentUser.profilePic}
          size="profile-row"
        />
        <textarea
          class="caption-input"
          onChange={event => this.genericOnChange(event)}
          type="text"
          rows="1"
          name="caption"
          placeholder="Write a caption..."
        />
        <img src={this.props.props.location.state.image} alt="uploaded" />
        {/* TO PUT IN THE HEADER */}
        <Link onClick={event => this.save(event)} to={`/`}>
          Share
        </Link>
      </div>
    );
  }
}

export default EditPostDetailsPage;
