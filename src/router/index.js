import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/category",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/Category.vue"),
  },
  {
    path: "/products/:id",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/recover-password",
    name: "RecoverPassword",
    component: () =>
      import(
        /* webpackChunkName: "recover-password" */ "../views/RecoverPassword.vue"
      ),
  },
  { name: "PageNotFound", path: "/404", component: PageNotFound },
  { name: "PNF", path: "/:match(.*)", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
