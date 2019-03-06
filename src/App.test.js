import React from "react";
import ReactDOM from "react-dom";
import { Shaders, Node, GLSL } from "gl-react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
