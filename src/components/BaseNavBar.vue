<template>
    <div>
        <div class="wrap-all">
            <div class="header-bar">
                <router-link to="/" class="brand">
                    <img src="../assets/logo_recetas.png" alt="" />
                </router-link>
                <div class="search-bar-main">
                    <div class="wrap-search">
                        <input @keyup.enter="getDataForSearch" v-model="search" type="text"
                            placeholder="Search your food" />
                    </div>
                    <div class="icon-search">
                        <i class="fa fa-search " aria-hidden="true"></i>
                    </div>
                </div>
                <div class="setting-section">
                    <div class="setting-icon">
                        <div id="edamam-badge" data-color="white"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="https://developer.edamam.com/attribution/badge.js"></script>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
	data() {
		return {
			search: "",
		};
	},
	methods: {
		...mapActions(["getData"]),
        ...mapMutations(["getFoodInfo"]),
		getDataForSearch() {
            this.getFoodInfo([""])
			this.getData(this.search);
			this.$router.push("/recetas").catch(() => {});
			this.search = "";
		},
	},
};
</script>

<style scoped>
.wrap-all {
    position: fixed;
    top: 0;
    width: 100%;

    box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px !important;
    background-color: white;

    overflow: hidden;

    z-index: 99;
}

.brand {
    width: 65px;
    min-width: 65px;
}

.brand img {
    width: 100%;
    cursor: pointer;
}

.header-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 80px;
}

.search-bar-main input {
    outline: none;
    border: none;

    width: 350px;
    height: 45px;

    font-weight: bold;
    font-size: 15px;
    padding-left: 20px;

    border-radius: 40px;
    border: 1px solid #dddddd;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%) !important;
}

.search-bar-main {
    position: relative;
}

.icon-search {
    position: absolute;
    top: 7px;
    right: 7px;

    color: white;

    height: 32px;
    width: 32px;

    background-color: #60ab59;
    border-radius: 20px;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
}

.setting-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 661px) {
    .setting-section {
        display: none;
    }
}

@media only screen and (max-width: 437px) {
    .search-bar-main input {
        width: 280px;
    }
}
</style>
