import Vue from "vue";
import VueRouter from "vue-router";

// import MainPage from "../components/MainComponent/MainPage";
// import welcome from "../components/MainComponent/WelcomeMainPage";

import Home from "../views/Home";
import Recetas from "../views/Recetas";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/recetas", component: Recetas },
    { path: "*", redirect: "/" },
  ],
});
