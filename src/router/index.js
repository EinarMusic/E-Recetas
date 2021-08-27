import Vue from "vue";
import VueRouter from "vue-router";

import MainPage from "../components/MainComponent/MainPage";
import welcome from "../components/MainComponent/WelcomeMainPage";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	routes: [
		{ path: "/", component: welcome },
		{ path: "/home", component: MainPage },
		{ path: "*", redirect: "/" },
	],
});
