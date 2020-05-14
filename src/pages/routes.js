import { router } from "../history";
import homepage from "./homepage";

const { root, effect } = router({
  "/": homepage,
});

export { root, effect };
