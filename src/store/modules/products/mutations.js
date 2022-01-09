import { SET_PRODUCTS_MUTATION } from "./types.js";

export default {
  [SET_PRODUCTS_MUTATION](state, data) {
    state.products = data;
  },
};
