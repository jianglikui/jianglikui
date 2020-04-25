import * as React from "react";
import * as ReactDOM from "react-dom";
import "./_commonCss/index.css";
import Login from "./Login";
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <>
    <Login />
  </>,
  document.getElementById("root")
);
