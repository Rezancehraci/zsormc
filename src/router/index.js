import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue"; // egyszerűbb egy sorba importálni és hivatkozni rá

const routes = [
  { path: "/", name: "home", component: () => import("../views/HomeView.vue") },
  { path: "/news", name: "news", component: () => import("../views/NewsView.vue") },
  { path: "/vote", name: "vote", component: () => import("../views/VoteView.vue") }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
