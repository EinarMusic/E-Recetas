<template>
	<div>
		<div class="wrap-all">
			<div class="wrap-sidebar">
				<SearchSideBar>
					<template v-slot:title>
						Ingredients
					</template>
					<template v-slot:description>
						<span>min <strong>·</strong> max</span>
					</template>
					<template v-slot:input-search>
						<div class="input-count">
							<input v-model="ing" type="text" placeholder="00-00" />
						</div>
					</template>
				</SearchSideBar>
				<SearchSideBar>
					<template v-slot:title>
						Calories
					</template>
					<template v-slot:description>
						<span>min <strong>·</strong> max</span>
					</template>
					<template v-slot:input-search>
						<div class="input-count">
							<input v-model="calories" type="text" placeholder="00-00" />
						</div>
					</template>
				</SearchSideBar>
				<SearchSideBar>
					<template v-slot:title>
						Time
					</template>
					<template v-slot:description>
						<span>hour <strong>·</strong> min</span>
					</template>
					<template v-slot:input-search>
						<div class="input-count">
							<input v-model="time" type="text" placeholder="00-00" />
						</div>
					</template>
				</SearchSideBar>
				<SearchSideBar>
					<template v-slot:title>
						Excluded
					</template>
					<template v-slot:description>
						<span>exclude food</span>
					</template>
					<template v-slot:input-search>
						<div class="wrap-input">
							<input v-model="excluded" type="text" placeholder="food" />
						</div>
					</template>
				</SearchSideBar>
				<SearchSideBar>
					<template v-slot:title>
						Diet label
					</template>
					<template v-slot:input-search>
						<select v-model="diet" class="wrap-select">
							<option value="balanced">Balanced</option>
							<option value="high-fiber">High fiber</option>
							<option value="high-protein">High protein</option>
							<option value="low-fat">Low fat</option>
							<option value="low-carb">Low carb</option>
							<option value="low-sodium">Low sodium</option>
						</select>
					</template>
				</SearchSideBar>
				<SearchSideBar>
					<template v-slot:title>
						Health label
					</template>
					<template v-slot:input-search>
						<select v-model="health" class="wrap-select">
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
					</template>
				</SearchSideBar>
				<SearchSideBar>
					<template v-slot:title>
						Cuisine type
					</template>
					<template v-slot:input-search>
						<select v-model="cuisineType" class="wrap-select">
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
					</template>
				</SearchSideBar>
				<SearchSideBar>
					<template v-slot:title>
						Meal type
					</template>
					<template v-slot:input-search>
						<select v-model="mealtype" class="wrap-select">
							<option value="breakfast">Breakfast</option>
							<option value="dinner">Dinner</option>
							<option value="lunch">Lunch</option>
							<option value="snack">Snack</option>
							<option value="teatime">Teatime</option>
						</select>
					</template>
				</SearchSideBar>
				<div class="btn-side-bar">
					<p @click="specifySearchs()">Done</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Axios from "axios";
import SearchSideBar from "../SideBar/SearchSideBar";

import { mapMutations, mapState } from "vuex";

export default {
	components: {
		SearchSideBar,
	},
	data() {
		return {
			ing: "",
			calories: "",
			time: "",
			excluded: "",
			diet: "",
			health: "",
			cuisineType: "",
			mealtype: "",
		};
	},
	computed: {
		...mapState(["search", "searchResult", "allSpecifySearch"]),
	},
	methods: {
		...mapMutations([
			"setData",
			"showMessageForSearchResult",
			"userSpecifySearch",
		]),
		async specifySearchs() {
			let specify = "";

			if (this.ing.length != 0) specify += "ingr=" + this.ing + "&";
			if (this.calories.length != 0)
				specify += "calories=" + this.calories + "&";
			if (this.time.length != 0) specify += "time=" + this.time + "&";
			if (this.excluded.length != 0)
				specify += "excluded=" + this.excluded + "&";
			if (this.diet != 0) specify += "diet=" + this.diet + "&";
			if (this.health.length != 0) specify += "health=" + this.health + "&";
			if (this.cuisineType.length != 0)
				specify += "cuisineType=" + this.cuisineType + "&";
			if (this.mealtype.length != 0) specify += "mealType=" + this.mealtype;

			try {
				let main = (
					await Axios.get(
						"https://api.edamam.com/api/recipes/v2?type=public&q=" +
							this.search +
							"&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4" +
							"&" +
							specify
					)
				).data;
				this.setData(main);
				this.userSpecifySearch([
					this.search,
					this.ing,
					this.calories,
					this.time,
					this.excluded,
					this.diet,
					this.health,
					this.cuisineType,
					this.mealtype,
				]);
				this.showMessageForSearchResult(false);
			} catch (err) {
				this.showMessageForSearchResult(true);
			}

			(this.ing = ""),
				(this.calories = ""),
				(this.time = ""),
				(this.excluded = ""),
				(this.diet = ""),
				(this.health = ""),
				(this.cuisineType = ""),
				(this.mealtype = "");
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

	width: 260px;

	background-color: white;
}

.wrap-sidebar {
	padding: 0 20px;
}

/* input-count */
.input-count input {
	border: none;
	outline: none;

	border: 1px solid rgb(176, 176, 176);
	border-radius: 20px;

	text-align: center;

	padding: 5px 0;
	width: 90px;
}

/* input */
.wrap-input input {
	border: none;
	outline: none;

	border: 1px solid rgb(176, 176, 176);
	border-radius: 20px;

	text-align: center;

	padding: 5px 0;
	width: 90px;
}

/* select */
.wrap-select {
	border: none;
	outline: none;

	border: 1px solid rgb(176, 176, 176);
	border-radius: 20px;

	padding: 5px 0;
	width: 90px;
}

/* btn-side-bar */
.btn-side-bar {
	margin-top: 15px;
}

.btn-side-bar p {
	display: inline-block;
	cursor: pointer;

	width: 200px;
	padding: 5px 15px;

	border-radius: 20px;
	background-color: #60ab59;

	text-align: center;
	font-size: 20px;
	color: white;
}
</style>
