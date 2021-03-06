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
  {
    path: "/watcher",
    name: "Watcher",
    component: () =>
      import("../pages/watcher.vue")
  },
  {
    path: "/computeder",
    name: "Computeder",
    component: () =>
      import("../pages/computeder.vue")
  },
  {
    path: "/renderFunc",
    name: "RenderFunc",
    component: () =>
      import("../pages/renderFunc.vue")
  },
  {
    path: "/parentProvide",
    name: "ParentProvide",
    component: () =>
      import("../pages/parentProvide.vue")
  },
  {
    path: "/templateUse",
    name: "TemplateUse",
    component: () =>
      import("../pages/templateUse.vue")
  },
  {
    path: "/customEvent",
    name: "CustomEvent",
    component: () =>
      import("../pages/customEvent.vue")
  },
  {
    path: "/mouseMove",
    name: "MouseMove",
    component: () =>
      import("../pages/mouseMove.vue")
  },
  {
    path: "/httpRequest",
    name: "HttpRequest",
    component: () =>
      import("../pages/httpRequest.vue")
  },
  {
    path: "/modal",
    name: "Modal",
    component: () =>
      import("../pages/modal.vue")
  },
  {
    path: "/asyncSuspense",
    name: "AsyncSuspense",
    component: () =>
      import("../pages/asyncSuspense.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
