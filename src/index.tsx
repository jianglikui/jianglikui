import * as React from "react";
import * as ReactDOM from "react-dom";
import * as styles from "./index.css";
import "./commonCss/index.css";
console.log(styles);

ReactDOM.render(
  <>
    <div className={styles.demo}>123</div>
    <div className="name">123</div>
    <h1>123</h1>
  </>,
  document.getElementById("root")
);
