export default {
  itemsInCart(state) {
    return state.items;
  },
  subTotlaPrice(state, getters) {
    // let all = 0;
    // getters.itemsInCart.forEach((item) => {
    //   all += Number(item.price * item.count);
    // });
    // return all;
    return getters.itemsInCart.reduce((prev, curr) => {
      return curr.price * curr.count + prev;
    }, 0);
  },
  fee(state, getters) {
    return getters.subTotlaPrice * 0.05;
  },
  totlaPrice(state, getters) {
    return getters.subTotlaPrice + getters.fee;
  },
};
