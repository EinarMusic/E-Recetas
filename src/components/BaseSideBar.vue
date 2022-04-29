<template>
    <div>
        <div class="wrap-all">
            <div class="wrap-sidebar">
                <SeachCard title="Ingredients" :description="{ first: 'min', second: 'max' }">
                    <input type="text" v-model="filterS.ingr" placeholder="00-00">
                </SeachCard>
                <!---->
                <SeachCard title="Calories" :description="{ first: 'min', second: 'max' }">
                    <input type="text" v-model="filterS.calories" placeholder="00-00">
                </SeachCard>
                <!---->
                <SeachCard title="Time" :description="{ first: 'hour', second: 'min' }">
                    <input type="text" v-model="filterS.time" placeholder="00-00">
                </SeachCard>
                <!---->
                <SeachCard title="Excluded" :description="{ first: 'exclude food', second: '' }">
                    <input type="text" v-model="filterS.excluded" placeholder="food">
                </SeachCard>
                <!---->
                <SeachCard title="Diet label" :description="{ first: '', second: '' }">
                    <select v-model="filterS.diet" class="wrap-select">
                        <option value="balanced">Balanced</option>
                        <option value="high-fiber">High fiber</option>
                        <option value="high-protein">High protein</option>
                        <option value="low-fat">Low fat</option>
                        <option value="low-carb">Low carb</option>
                        <option value="low-sodium">Low sodium</option>
                    </select>
                </SeachCard>
                <!---->
                <SeachCard title="Health label" :description="{ first: '', second: '' }">
                    <select v-model="filterS.health" class="wrap-select">
                        <option value="alcohol-free">Alcohol free</option>
                        <option value="celery-free">Celery free</option>
                        <option value="crustacean-free">Crustacean free</option>
                        <option value="dairy-free">Dairy free</option>
                        <option value="egg-free">Egg free</option>
                        <option value="fish-free">Fish free</option>
                        <option value="fordmap-free">Fodmap free</option>
                        <option value="gluten-free">Gluten free</option>
                        <option value="immuno-supportive">Immuno supportive</option>
                        <option value="keto-friendly">Keto friendly</option>
                        <option value="kosher">Kosher</option>
                        <option value="low-fat-abs">Low fat abs</option>
                        <option value="low-potassium">Low potassium</option>
                        <option value="low-sugar">Low sugar</option>
                        <option value="lupine-free">Lupine free</option>
                        <option value="mustard-free">Mustard free</option>
                        <option value="No-oil-added">No oil added</option>
                        <option value="paleo">Paleo</option>
                        <option value="peanut-free">Peanut free</option>
                        <option value="pescatarian">Pescatarian</option>
                        <option value="pork-free">Pork free</option>
                        <option value="red-meat-free">Red meat free</option>
                        <option value="sesame-free">Sesame free</option>
                        <option value="shellfish-free">Shellfish free</option>
                        <option value="soy-free">Soy free</option>
                        <option value="sugar-conscious">Sugar conscious</option>
                        <option value="tree-nut-free">Tree nut free</option>
                        <option value="vegan">Vegan</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="wheat-free">Wheat free</option>
                    </select>
                </SeachCard>
                <!---->
                <SeachCard title="Cuisine type" :description="{ first: '', second: '' }">
                    <select v-model="filterS.cuisineType" class="wrap-select">
                        <option value="American">American</option>
                        <option value="Asian">Asian</option>
                        <option value="British">British</option>
                        <option value="Caribbean">Caribbean</option>
                        <option value="Central%20Europe">Central Europe</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Eastern%20Europe">Eastern Europe</option>
                        <option value="French">French</option>
                        <option value="Indian">Indian</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Kosher">Kosher</option>
                        <option value="Mediterranean">Mediterranean</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Middle%20Eastern">Middle Eastern</option>
                        <option value="Nordic">Nordic</option>
                        <option value="South%20American">South American</option>
                        <option value="South%20East%20Asian">South East Asian</option>
                    </select>
                </SeachCard>
                <!---->
                <SeachCard title="Meal type" :description="{ first: '', second: '' }">
                    <select v-model="filterS.mealtype" class="wrap-select">
                        <option value="breakfast">Breakfast</option>
                        <option value="dinner">Dinner</option>
                        <option value="lunch">Lunch</option>
                        <option value="snack">Snack</option>
                        <option value="teatime">Teatime</option>
                    </select>
                </SeachCard>
                <!---->
                <BaseButton @click="setFilteredSearch()" label="Done" />
            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";

import SeachCard from "./SeachCard.vue";
import BaseButton from "./BaseButton.vue"

import { mapMutations, mapState } from "vuex";

export default {
    components: {
        SeachCard,
        BaseButton
    },
    data() {
        return {
            filterS: {
                ingr: "",
                calories: "",
                time: "",
                excluded: "",
                diet: "",
                health: "",
                cuisineType: "",
                mealtype: "",
            },
        };
    },
    computed: {
        ...mapState(["search"]),
    },
    methods: {
        ...mapMutations([
            "setData",
            "showMessageForSearchResult",
            "getFoodInfo",
        ]),
        async setFilteredSearch() {
            const url = "https://api.edamam.com/api/recipes/v2?type=public&q=";
            const key = "&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4"

            const filteredSearch = [];
            Object.entries(this.filterS).forEach(([key, value]) => {
                if (value) filteredSearch.push(`${key}=${value}&`)
            });

            await Axios.get(`${url}${this.search}${key}&${filteredSearch.join("")}`)
                .then((recipes) => this.setData(recipes.data))
                .catch(() => this.showMessageForSearchResult(true));

            this.getFoodInfo([this.search, Object.values(this.filterS)].flat());
        },
    },
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.wrap-all {
    border-right: 1px solid rgb(235, 235, 235);
    background-color: white;

    width: 260px;
}

.wrap-sidebar {
    padding: 0 20px;
}
</style>
