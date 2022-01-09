export default {
  namespaced: true,
  state: () => ({
    info: { name: "Taha", age: 20 },
  }),
  getters: {
    getUserInfo(state) {
      return state.info;
    },
  },
};
