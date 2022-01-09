import { createStore } from "vuex";

import user from "./modules/user/index.js";
import cart from "./modules/cart/index.js";
import products from "./modules/products/index.js";

const store = createStore({
  modules: {
    user,
    cart,
    products,
  },
});

export default store;
