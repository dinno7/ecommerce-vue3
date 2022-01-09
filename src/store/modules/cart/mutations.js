import { ADD_TO_CART, REMOVE_FROM_CART, SET_NEW_COUNT } from "./types.js";

export default {
  [ADD_TO_CART](state, product) {
    const isProductExist = state.items.find(
      (item) => Number(item.id) === Number(product.id)
    );
    if (isProductExist) {
      isProductExist.count += product.count;
    } else {
      state.items.push(product);
    }
  },
  [REMOVE_FROM_CART](state, product) {},
  [SET_NEW_COUNT](state, { product, count }) {
    product.count = count;
  },
};
