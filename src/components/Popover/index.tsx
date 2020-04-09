import * as React from "react";
import * as styles from "./index.css";

function Popover(props: {
  children?: React.ReactNode;
  content?: React.ReactNode;
  visible?: Boolean;
  onVisibleChange?: Function;
}) {
  const { onVisibleChange = () => {} } = props;
  const [scopedVisible, setScopedVisible] = React.useState(false);
  const visible = props.visible || scopedVisible;
  return (
    <span style={{ position: "relative" }}>
      <span
        onClick={() => {
          onVisibleChange(!visible);
          setScopedVisible(!visible);
        }}
      >
        {props.children}
      </span>
      <div className={`${styles.content} ${styles[visible ? "show" : "hide"]}`}>
        <div>{props.content}</div>
      </div>
    </span>
  );
}

export default Popover;
