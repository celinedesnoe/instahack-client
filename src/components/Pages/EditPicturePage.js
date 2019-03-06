import React, { Component } from "react";
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";
import GL from "gl-react";

import "./EditPicturePage.css";

// const shaders = Shaders.create({
//   helloBlue: {
//     frag: GLSL`
// precision highp float;
// varying vec2 uv;
// uniform float blue;
// void main() {
//   gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
// }`
//   }
// });

class EditPicturePage extends Component {
  render() {
    console.log("Image received", this.props.props.location.state.image);
    return (
      <div className="EditPicturePage">
        <div>
          EDIT PICTURE PAGE
          <img src={this.props.props.location.state.image} alt="uploaded" />
        </div>

        {/* <Surface width={window.width} height={window.height}>
          <Node
            shader={{
              frag: shaders.helloBlue
            }}
          />
        </Surface> */}
      </div>
    );
  }
}

export default EditPicturePage;
