import { createStore } from "vuex";
import customers from "./modules/customers/index.js";

export default createStore({
  modules: { customers },
});
