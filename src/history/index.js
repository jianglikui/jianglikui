import { createBrowserHistory } from "history";
import { createDom } from "../utils";

const history = createBrowserHistory({ basename: "" });

export default history;

export const router = (config) => {
  const { root } = createDom({ node: "span" });
  const handleHistoryChange = () => {
    console.log(location);
    root.innerHTML = config[location.pathname];
  };
  handleHistoryChange();
  const effect = () => history.listen(handleHistoryChange);
  return { root, effect };
};
