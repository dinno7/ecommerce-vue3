import { ADD_TO_CART, REMOVE_FROM_CART, SET_NEW_COUNT } from "./types.js";
export default {
  addToCart(ctx, payload) {
    ctx.commit(ADD_TO_CART, payload);
    localStorage.setItem("cart", JSON.stringify(ctx.state));
  },
  removeFromCart(ctx, payload) {
    let targetItem = ctx.state.items.find(
      (i) => Number(i.id) === Number(payload)
    );
    let itemsInLS = JSON.parse(localStorage.getItem("cart")).items;
    let targetItemInLS = itemsInLS.find(
      (i) => Number(i.id) === Number(payload)
    );
    let targetItemInLSIndex = itemsInLS.indexOf(targetItemInLS);
    if (targetItem && targetItemInLS && targetItem.id === targetItemInLS.id) {
      ctx.commit(REMOVE_FROM_CART, payload);
      ctx.state.items.splice(targetItemInLSIndex, 1);
      localStorage.setItem("cart", JSON.stringify(ctx.state));
    }
  },
  setNewCount(ctx, payload) {
    const product = ctx.state.items.find(
      (i) => Number(i.id) === Number(payload.id)
    );
    if (product) {
      ctx.commit(SET_NEW_COUNT, { product, count: payload.count });
      localStorage.setItem("cart", JSON.stringify(ctx.state));
    } else {
      console.log("Error finding this product.");
    }
  },
};
