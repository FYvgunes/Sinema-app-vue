import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import movieDetails from "./components/movieDetails";
import Getticket from "./components/getticket.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/movie/:id", component: movieDetails },
  { path: "/movie/getticket/:id", component: Getticket }
];
export const router = new VueRouter({
  mode: "history",
  routes
});
