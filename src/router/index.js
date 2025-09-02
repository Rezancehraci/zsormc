import { createRouter, createWebHashHistory } from "vue-router";
import { auth } from "@/firebase";
// import HomeView from "../views/HomeView.vue"; // egyszerűbb egy sorba importálni és hivatkozni rá

const routes = [
    { path: "/", name: "home", component: () => import("../views/HomeView.vue") },
    { path: "/news", name: "news", component: () => import("../views/NewsView.vue") },
    { path: "/news/:id", name: "details", component: () => import("../views/NewsDetailsView.vue") },
    { path: "/vote", name: "vote", component: () => import("../views/VoteView.vue") },
    { path: "/admin", name: "admin", component: () => import("../views/admin/AdminView.vue"), meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const user = auth.currentUser;
        if (user) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
});

export default router;
