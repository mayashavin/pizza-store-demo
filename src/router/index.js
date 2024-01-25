import {
  createRouter,
  createWebHistory
} from "vue-router";
import PizzasView from "../views/PizzasView.vue";
import ErrorView from "../views/ErrorView.vue";
import PizzaView from "../views/PizzaView.vue";

export const routes = [
  {
    path: "/",
    props: (route) => ({
      searchTerm: route.query?.search || "",
    }),    
    component: PizzasView,
    name: 'home',
  },{
    path: "/:id",
    name: "pizza",
    component: PizzaView,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorView,
    redirect: "/",
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


export default router;