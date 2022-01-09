import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/font.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const options = {
  confirmButtonColor: "#46B1EF",
  cancelButtonColor: "#D62828",
};

createApp(App)
  .use(router)
  .use(store)
  .use(VueSweetalert2, options)
  .mount("#app");
