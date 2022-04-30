import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    search: "",
    recetas: [],
    foodInfo: null,
    searchResult: false,
  },
  mutations: {
    getSearch(state, search) {
      state.search = search;
    },
    setData(state, data) {
      state.recetas = data;

      localStorage.setItem("receta", JSON.stringify(data));
    },
    getFoodInfo(state, info) {
      state.foodInfo = info.filter((data) => data != "").join(" · ");
    },
    showMessageForSearchResult(state, bool) {
      state.searchResult = bool;
    },
  },
  actions: {
    async getData(context, search) {
      const url = "https://api.edamam.com/api/recipes/v2?type=public&q=";
      const key = "&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4";

      await Axios.get(`${url}${search}${key}`)
        .then((recipes) => {
          context.commit("setData", recipes.data);
          context.commit("getSearch", search);
        })
        .catch(() => {
          context.commit("showMessageForSearchResult", true);
        });
    },
    async getDataFromRecommendation(context, recom) {
      await Axios.get(recom).then((recipes) =>
        context.commit("setData", recipes.data)
      );
    },
  },
});
