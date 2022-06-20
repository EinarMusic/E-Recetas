<template>
    <div>
        <div class="description-search">
            <p>{{ foodInfo }}</p>
        </div>
        <div class="wrap-all">
            <div v-if="searchResult || recetas.hits.length === 0" class="search-result">
                <p>no result for your search</p>
            </div>
            <div v-else class="car-content" v-for="receta in recetas.hits" :key="receta.id">
                <a :href="receta.recipe.shareAs">
                    <div class="img-wrap">
                        <img :src="receta.recipe.image" alt="" />
                    </div>
                    <div class="title-food">
                        <p>{{ receta.recipe.label }}</p>
                    </div>
                    <div class="description-food">
                        <span class="description-left">
                            {{ Math.round(receta.recipe.calories) }} Calories
                        </span>
                        <span>
                            {{ receta.recipe.ingredientLines.length }} Ingredients
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["recetas", "searchResult", "foodInfo"]),
    },
    methods: {
        urlToGoEdamam(path, recipe) {
            const url = "https://www.edamam.com/results/recipe/?recipe=";
            const food = recipe.toLowerCase().split(" ").join("-");
            const id = path.slice(path.lastIndexOf("-") + 1, path.lastIndexOf("/"));

            return `${url}${food}${id}`;
        },
    },
};
</script>

<style scoped>
.description-search {
    margin: 0 0 10px 15px;
}

.wrap-all {
    background-color: white;

    width: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.search-result {
    text-align: center;
    color: red;
    width: 40%;
    position: absolute;
    left: 300px;
}

.car-content {
    background-color: rgba(0, 0, 0, 0.05);

    min-width: 240px;
    height: 240px;

    margin: 0 5px 10px 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    cursor: pointer;
}

.img-wrap {
    width: 150px;
    height: 150px;

    border-radius: 50%;
}

img {
    width: 100%;

    border-radius: 50%;
}

.title-food {
    margin-top: 3px;
}

.title-food p {
    font-weight: bold;
    font-size: 15px;

    margin-top: 3px;

    width: 200px;

    white-space: nowrap;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
}

.description-food {
    font-size: 14px;
    margin-top: 3px;
}

.description-food span {
    padding: 0 10px;

    color: rgb(83, 83, 83);
}

.description-left {
    border-right: 1px solid rgb(165, 165, 165);
}

a {
    text-decoration: none;
    color: black;

    display: flex;
    align-items: center;
    flex-direction: column;
}

@media only screen and (max-width: 500px) {
    .car-content {
        width: 200px;
        min-width: 200px;
    }

    .description-food {
        font-size: 12px;
    }

    .img-wrap {
        width: 130px;
        height: 130px;
    }
}

@media only screen and (max-width: 419px) {
    .car-content {
        width: 185px;
        min-width: 185px;
        height: 190px;
    }

    .description-food {
        font-size: 11px;
    }

    .img-wrap {
        width: 115px;
        height: 115px;
    }

    .title-food p {
        width: 180px;
    }
}

@media only screen and (max-width: 389px) {
    .car-content {
        width: 175px;
        min-width: 175px;
        height: 190px;
    }

    .description-food {
        font-size: 10px;
    }

    .img-wrap {
        width: 115px;
        height: 115px;
    }

    .title-food p {
        width: 170px;
    }
}
</style>
