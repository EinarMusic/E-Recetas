<template>
	<div>
		<div class="content-side">
			<div class="content-description">
				<h2><slot name="title" /></h2>
				<span><slot name="description"/></span>
			</div>
			<div class="content-btn">
				<slot name="input-search" />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-side {
	display: flex;
	justify-content: space-between;
	align-items: center;

	border-bottom: 1px solid rgb(235, 235, 235);
	padding: 15px 0;

	width: 220px;
}

/* title */
.content-description {
	line-height: 17px;

	width: 110px;
}

.content-description h2 {
	font-size: 15px;
}

.content-description span {
	font-size: 10px;
}

/* btn */
.content-btn {
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 92px;
}

.content-btn button {
	border-radius: 50%;
	border: 1px solid rgb(176, 176, 176);
	background-color: white;

	width: 30px;
	height: 30px;
}

.content-result {
	margin: 0 2px;
}

.content-result .center {
	margin: 0 3px 0 5px;
}
</style>
