<template>
	<div>
		<div class="wrap-all">
			<HeaderBarContent />
			<div class="main-content">
				<div class="welcome-message">
					<h1>
						Bienvenido al sitio de las mejores <br />
						Recetas para tu cocina.
					</h1>
				</div>
				<div class="wrap-center-section">
					<div
						class="center-section"
						v-for="reco in recommendation"
						:key="reco.id"
					>
						<div class="title-content">
							<h1>{{ reco.title }}</h1>
						</div>
						<div class="wrap-img-content">
							<div class="img-content" v-for="img in reco.img" :key="img.id">
								<img :src="img" alt="" />
							</div>
						</div>
						<div class="description-card">
							<p>{{ reco.description }}</p>
						</div>
						<div class="more-link">
							<p @click="recommendationPage(reco.url)">click for more</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderBarContent from "../HeaderBar/HeaderBarContent";

import { mapActions } from "vuex";

export default {
	components: {
		HeaderBarContent,
	},
	methods: {
		...mapActions(["recommendationWelcomePage"]),
		recommendationPage(url) {
			this.recommendationWelcomePage(url);
			this.$router.push("/home");
		},
	},
	data() {
		return {
			recommendation: [
				{
					title: "Vegan",
					img: [
						"https://www.edamam.com/web-img/5b9/5b9d077eed8c38dbd7d1df7431022313.jpg",
						"https://www.edamam.com/web-img/648/64838d3745fb47c7885ad5f0abf212c1.jpg",
						"https://www.edamam.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg",
						"https://www.edamam.com/web-img/7ee/7ee22e9973f93c37c659c2831fc21812.jpg",
					],
					description: "High-protein · Dinner · Italian",
					url:
						"https://api.edamam.com/api/recipes/v2?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4&health=vegan&cuisineType=Italian&mealType=Dinner",
				},
				{
					title: "Vegetarian",
					img: [
						"https://www.edamam.com/web-img/4ac/4ac85a724c10963ba497afcc71e4d435",
						"https://www.edamam.com/web-img/233/2332f5d67ea3b52347f6493d47910922.jpg",
						"https://www.edamam.com/web-img/337/337d98d215b2bc4c90238ac08c2fdc28",
						"https://www.edamam.com/web-img/624/6245dfb022326a01cd27dc50c887ea95",
					],
					description: "High-protein · Lunch · Asian",
					url:
						"https://api.edamam.com/api/recipes/v2?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4&diet=high-protein&health=vegetarian&cuisineType=Asian&mealType=Lunch",
				},
				{
					title: "Kosher",
					img: [
						"https://www.edamam.com/web-img/099/099ff092293a4e30d9cc3e782d9b389e.jpg",
						"https://www.edamam.com/web-img/4ea/4ea44da2c9c5b7f712b4a93840a2607d",
						"https://www.edamam.com/web-img/716/716d532f7e4b96dfe9ffcd2cf7e68414.jpg",
						"https://www.edamam.com/web-img/20a/20a267bca080cfc21a01ea837cada9ba",
					],
					description: "Low-carb · Breakfast · American",
					url:
						"https://api.edamam.com/api/recipes/v2?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4&diet=low-carb&health=kosher&cuisineType=American&mealType=Breakfast",
				},
				{
					title: "Keto friendly",
					img: [
						"https://www.edamam.com/web-img/083/0838b30272ab5db411387b87cf29f19f.jpg",
						"https://www.edamam.com/web-img/4da/4dab2c0d14b883762918e5ee07493c6e.jpg",
						"https://www.edamam.com/web-img/4e6/4e6290f534d5a8dec4fec02a276a44d2.jpg",
						"https://www.edamam.com/web-img/72b/72b209af1e487419a8affb36b1f8f088.jpg",
					],
					description: "Snack · Indian",
					url:
						"https://api.edamam.com/api/recipes/v2?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4&health=keto-friendly&cuisineType=Indian&mealType=Snack",
				},
			],
		};
	},
};
</script>

<style scoped>
.wrap-all {
	overflow: hidden;

	background: url(../../assets/pexels-pixabay-326279.jpg);
	background-size: cover;
	background-repeat: no-repeat;

	width: 100%;
}

.main-content {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;

	width: 100%;
	height: 100%;
}

.welcome-message {
	padding: 4% 0;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 80px;
	color: rgb(255, 255, 255);

	background: rgba(0, 0, 0, 0.4);
	padding: 1.5rem;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.wrap-center-section {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;

	width: 100%;
	padding: 0 10px;
}

.center-section {
	width: 285px;

	padding: 0 20px;
	margin-bottom: 10px;

	box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%) !important;
	background: white;
	border-radius: 5px;
}

.title-content {
	padding: 10px 0 5px 0;
	font-size: 12px;

	color: #60ab59;
}

.wrap-img-content {
	width: 100%;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.img-content {
	width: 120px;
}

.img-content img {
	width: 100%;

	border-radius: 7px;
}

.description-card {
	font-size: 13px;
	padding: 10px 0;
}

.more-link {
	font-size: 11px;
	color: #007185;

	text-align: end;

	margin-bottom: 15px;
}

.more-link p {
	cursor: pointer;
}

@media only screen and (min-width: 1244px) {
	.main-content {
		height: 100vh;
	}
	.center-section {
		margin: 0 10px;
	}
}

@media only screen and (max-width: 1244px) {
	.wrap-all {
		background-position: 0 50%;
	}
}

@media only screen and (max-width: 1164px) {
	.wrap-all {
		background-position: 45% 50%;
	}
}

@media only screen and (max-width: 546px) {
	.wrap-all {
		background-position: 55% 50%;
	}
}

@media only screen and (max-width: 878px) {
	.wrap-center-section {
		justify-content: center;
		margin-top: 10px;
	}
	.welcome-message {
		font-size: 11px;
	}
	.center-section {
		margin: 0 10px 15px 10px;
	}
}
</style>
