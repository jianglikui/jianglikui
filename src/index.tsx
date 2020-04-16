import * as React from "react";
import * as ReactDOM from "react-dom";
import "./commonCss/index.css";
import Launcher from "./Launcher";
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <>
    <Launcher />
  </>,
  document.getElementById("root")
);
