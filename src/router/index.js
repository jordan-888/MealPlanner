import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import MealPlanner from "../views/MealPlanner.vue";
import Calendar from "../views/Calendar.vue"; // File name is Calendar.vue

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/meal-planner", name: "MealPlanner", component: MealPlanner },
  { path: "/calendar", name: "Calendar", component: Calendar }, // Route name is "Calendar"
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
