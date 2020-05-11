import history from "../../history";
import { createDom } from "../../utils";

export default () => {
  const { root, homepageButton } = createDom({
    node: "div",
    html: [
      { node: "h1", html: "404" },
      {
        node: "button",
        html: "首页",
        ref: "homepageButton",
      },
    ],
  });
  homepageButton.onclick = () => history.push("/");
  return {
    root,
  };
};
