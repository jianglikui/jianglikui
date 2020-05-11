import { ADD, dispatch, subscribe } from "../../store";
import history from "../../history";
import { createDom } from "../../utils";

export default () => {
  const elements = createDom({
    node: "div",
    html: [
      { node: "h1", html: "我是标题1", ref: "h1" },
      {
        node: "h2",
        ref: "h2",
        html: [
          { node: "button", html: "404", ref: "notFountButton" },
          { node: "button", html: "button2" },
        ],
      },
    ],
  });

  const { root, h1, notFountButton } = elements;

  notFountButton.onclick = () => history.push("/404");

  return {
    root,
    effect: () => {
      const unsubscribe = subscribe(function (state) {
        h1.innerText = state.times;
      });

      var siv = setInterval(() => {
        dispatch({ type: ADD });
      }, 1000);

      return () => {
        clearInterval(siv);
        unsubscribe();
      };
    },
  };
};
