import React, { Component } from "react";

class TakePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="TakePhoto">
        <h2>TAKE PHOTO COMPONENT</h2>

        {/* Photo input */}
        <label>
          take a photo
          <input type="file" accept="image/*" capture="camera" />
        </label>
      </section>
    );
  }
}

export default TakePhoto;
