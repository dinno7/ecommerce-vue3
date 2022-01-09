let items = JSON.parse(localStorage.getItem("cart"))?.items
  ? (items = JSON.parse(localStorage.getItem("cart"))?.items)
  : [];

const state = () => ({
  items,
});
export default state;
