import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quotes",
    name: "quotes",
    component: () =>
      import(/* webpackChunkName: "quotes" */ "../views/QuotesView.vue"),
  },
  {
    path: "/houses",
    name: "houses",
    component: () =>
      import(/* webpackChunkName: "houses" */ "../views/HousesView.vue"),
  },
  // {
  //   path: "/houses/:slug",
  //   name: "household",
  //   component: () =>
  //     import(/* webpackChunkName: "houses" */ "../views/HouseHold.vue"),
  //   props: true,
  // },
  {
    path: "/persons",
    name: "persons",
    component: () =>
      import(/* webpackChunkName: "persons" */ "../views/PersonsView.vue"),
  },
];

// const loc = process.env.BASE_URL;
// eslint-disable-next-line prettier/prettier
const loc = window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/'));

const router = createRouter({
  history: createWebHistory(loc),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
