import { createRouter, createWebHistory } from "vue-router";
import FilmsAccounts from "../views/FilmsAccounts.vue";
import FilmsHours from "../views/FilmsHours.vue";
import SeriesAccounts from "../views/SeriesAccounts.vue";
import SeriesHours from "../views/SeriesHours.vue";

const routes = [
  {
    path: "/",
    name: "FilmsAccounts",
    component: FilmsAccounts,
  },
  {
    path: "/films-by-hours",
    name: "FilmsHours",
    component: FilmsHours,
  },
  {
    path: "/series-by-accounts",
    name: "SeriesAccounts",
    component: SeriesAccounts,
  },
  {
    path: "/series-by-hours",
    name: "SeriesHours",
    component: SeriesHours,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
