export default {
  allProducts(state) {
    return state.products;
  },
  getProductByID: (state) => (id) => {
    return state.products.find((product) => product.id === Number(id));
  },
  productsCount(state) {
    return state.products.length;
  },
};
