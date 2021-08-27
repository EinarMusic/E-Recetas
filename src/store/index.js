import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		recetas: [],
		search: "",
		searchResult: false,
		allSpecifySearch: null,
	},
	mutations: {
		takeSearch(state, search) {
			state.search = search;
		},
		setData(state, data) {
			state.recetas = data;
			localStorage.setItem("receta", JSON.stringify(data));
		},
		showMessageForSearchResult(state, bool) {
			state.searchResult = bool;
		},
		userSpecifySearch(state, specify) {
			let main = specify.filter((data) => {
				return data != "";
			});

			state.allSpecifySearch = main.join(" · ");

			localStorage.setItem("specify", JSON.stringify(specify));
		},
	},
	actions: {
		async getData(context, search) {
			try {
				let main = (
					await Axios.get(
						"https://api.edamam.com/api/recipes/v2?type=public&q=" +
							search +
							"&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4"
					)
				).data;
				context.commit("setData", main);
			} catch (err) {
				context.commit("showMessageForSearchResult", true);
			}
		},
		async recommendationWelcomePage(context, recommendation) {
			let main = (await Axios.get(recommendation)).data;
			context.commit("setData", main);
		},
	},
});
