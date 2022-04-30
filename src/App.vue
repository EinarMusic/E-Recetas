<template>
	<div>
		<div class="header">
			<BaseNavBar />
		</div>
		<router-view />
	</div>
</template>

<script>
import BaseNavBar from "./components/BaseNavBar.vue";

export default {
	name: "App",
	components: {
		BaseNavBar,
	},
};
</script>

<style>
* {
	font-family: Avenir, Helvetica, Arial, sans-serif;

	margin: 0;
	padding: 0;

	box-sizing: border-box;
}
</style>
