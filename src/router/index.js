import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Editar from "../views/Editar.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/editar/:id", name: "Editar", component: Editar },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
