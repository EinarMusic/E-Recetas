<template>
    <div>
        <div class="wrap-all">
            <div class="left-bar">
                <BaseSideBar />
            </div>
            <div class="center-content">
                <BaseCard />
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

import BaseSideBar from "../components/BaseSideBar.vue";
import BaseCard from "../components/BaseCard.vue";

export default {
    components: {
        BaseSideBar,
        BaseCard,
    },
    methods: {
        ...mapMutations(["setData"]),
    },
    created() {
        this.setData(JSON.parse(localStorage.getItem("receta")));
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
