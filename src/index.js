import history from "./history";
import { createDom } from "./utils";

const root = document.body;
let clearEffect = () => {};
let renderDom;
function handleHistoryChange(location) {
  clearEffect();

  if (renderDom) root.removeChild(renderDom);

  const renderComponent = (promise) => {
    promise.then((module) => {
      const component = module.default();
      renderDom = component.root;
      root.appendChild(component.root);
      component.effect = component.effect || (() => {});
      clearEffect = component.effect() || (() => {});
    });
  };

  switch (location.pathname) {
    case "/":
      renderComponent(import("./pages/homepage"));
      break;
    case "/404":
      renderComponent(import("./pages/404"));
      break;
  }
}
history.listen(handleHistoryChange);
handleHistoryChange(location);
