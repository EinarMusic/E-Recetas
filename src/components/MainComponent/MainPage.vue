<template>
	<div>
		<div class="wrap-all">
			<div class="header">
				<HeaderBarContent />
			</div>
			{{ some }}
			<div class="left-bar">
				<LeftSideBar />
			</div>
			<div class="center-content">
				<CardContentMain />
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

import HeaderBarContent from "../HeaderBar/HeaderBarContent";
import LeftSideBar from "../SideBar/LeftSideBar";
import CardContentMain from "../CardFood/CardContentMain";

export default {
	data() {
		return {
			some: null,
		};
	},
	components: {
		LeftSideBar,
		CardContentMain,
		HeaderBarContent,
	},
	computed: {
		...mapState(["recetas"]),
	},
	methods: {
		...mapMutations(["setData", "userSpecifySearch"]),
	},
	created() {
		let data = localStorage.getItem("receta");
		this.setData(JSON.parse(data));

		let user_specify = localStorage.getItem("specify");
		this.userSpecifySearch(JSON.parse(user_specify));
	},
};
</script>

<style scoped>
.wrap-all {
	display: flex;

	width: 100%;
}

.left-bar {
	margin-top: 90px;

	min-width: 260px;

	position: fixed;
	overflow: hidden;
}

.center-content {
	margin-top: 100px;
	margin-left: 260px;
}

@media only screen and (max-width: 500px) {
	.left-bar {
		display: none;
	}
	.center-content {
		margin: 100px 0;
	}
}
</style>
