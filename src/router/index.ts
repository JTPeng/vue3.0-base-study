import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/todoList",
    name: "TodoList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/todoList/index.vue")
  },
  {
    path: "/recursion",
    name: "Recursion",
    component: () =>
      import("../components/Recursion.vue")
  },
  {
    path: "/notRecursion",
    name: "NotRecursion",
    component: () =>
      import("../components/NotRecursion.vue")
  },
  {
    path: "/toRow",
    name: "ToRow",
    component: () =>
      import("../components/ToRow.vue")
  },
  {
    path: "/toRef",
    name: "ToRef",
    component: () =>
      import("../components/ToRef.vue")
  },
  {
    path: "/toRefs",
    name: "ToRefs",
    component: () =>
      import("../components/ToRefs.vue")
  },
  {
    path: "/customRef",
    name: "CustomRef",
    component: () =>
      import("../components/CustomRef.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
