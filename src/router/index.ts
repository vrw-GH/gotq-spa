import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/quotes",
    name: "Quotes",
    component: () =>
      import(/* webpackChunkName: "quotes" */ "../views/QuotesView.vue"),
  },
  {
    path: "/houses",
    name: "Houses",
    component: () =>
      import(/* webpackChunkName: "houses" */ "../views/HousesView.vue"),
  },
  {
    path: "/houses/:slug",
    name: "Household",
    component: () =>
      import(/* webpackChunkName: "houses" */ "../views/HousesView.vue"),
    // props: true,
  },
  {
    path: "/persons",
    name: "Persons",
    component: () =>
      import(/* webpackChunkName: "persons" */ "../views/PersonsView.vue"),
  },
  {
    path: "/persons/:slug",
    name: "Character",
    component: () =>
      import(/* webpackChunkName: "houses" */ "../views/PersonsView.vue"),
    // props: true,
  },
  {
    path: "/:catchAll(.*)*",
    component: HomeView,
  },
];

const loc = window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/'));
// const loc = process.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(loc),
  routes,
});

export default router;
