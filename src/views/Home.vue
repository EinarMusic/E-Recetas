<template>
    <div>
        <div class="wrap-all">
            <div class="main-content">
                <div class="welcome-message">
                    <h1 >
                        Welcome to the site of the best <br />
                        Recipes for your kitchen.
                    </h1>
                </div>
                <div class="wrap-center-section">
                    <div class="center-section" v-for="reco in recommendation" :key="reco.id">
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
                            <p @click="recommendationPage(reco.url, reco.description)">click for more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapMutations } from "vuex";
import Axios from "axios";

export default {
    methods: {
        ...mapActions(["getDataFromRecommendation"]),
        ...mapMutations(["getFoodInfo"]),
        recommendationPage(url, info) {
            this.getDataFromRecommendation(url);
            this.getFoodInfo([info]);
            this.$router.push("/recetas");
        },
        // The API changes the urls of the food images. 
        // This function will take images specified by us regardless of the url of the feeds changing.
        createRecommendations() {
            this.recommendation.forEach((reco) => {
                reco.food.forEach((food) => {
                    Axios.get(food).then((link) => {
                        reco.img.push(link.data.recipe.images.SMALL.url)
                    })
                })
            })
        }
    },
    created() {
        this.createRecommendations();
    },
    data() {
        return {
            recommendation: [
                {
                    title: "Vegan",
                    food: [
                        'https://api.edamam.com/api/recipes/v2/dadf6fb70e606740059ebf946a340e7b?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/5219c947422a8d2760b5422de21c789f?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/726c43d37a80089a162a83288da7ba83?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/7016d40c78ae938f7baa2249b6790f87?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4'
                    ],
                    img: [],
                    description: "High-protein · Dinner · Italian",
                    url:
                        "https://api.edamam.com/api/recipes/v2?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4&health=vegan&cuisineType=Italian&mealType=Dinner",
                },
                {
                    title: "Vegetarian",
                    food: [
                        'https://api.edamam.com/api/recipes/v2/6d5397693be269d56cbdef3e164ae3df?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/3665fc2552df40565853ec31ff36a936?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/d02e0665ba957205e986a969f14ee0b0?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/6d128297bc5c905b91a8830c1a67c8b7?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4'
                    ],
                    img: [],
                    description: "High-protein · Lunch · Asian",
                    url:
                        "https://api.edamam.com/api/recipes/v2?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4&diet=high-protein&health=vegetarian&cuisineType=Asian&mealType=Lunch",
                },
                {
                    title: "Kosher",
                    food: [
                        'https://api.edamam.com/api/recipes/v2/3848a4ffb65f44aa0b32e29579af4534?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/8895fad51338f75404a10886721bc0d3?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/ae93160c1155b917feca8280cb966649?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/7ff7c0b2b3e628577a132ee15605fd4f?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4'
                        

                    ],
                    img: [],
                    description: "Low-carb · Breakfast · American",
                    url:
                        "https://api.edamam.com/api/recipes/v2?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4&diet=low-carb&health=kosher&cuisineType=American&mealType=Breakfast",
                },
                 {
                    title: "Keto friendly",
                    food: [
                        'https://api.edamam.com/api/recipes/v2/73aaed15eca33ba050f88bd987b7d2a0?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/b415c6c509616a92eafb9392f5b2ab4c?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/6f5ce7da1635291c122a315ea1e7faa6?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4',
                        'https://api.edamam.com/api/recipes/v2/e807ef471942172f6350842fb19373b4?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4'

                    ],
                    img: [],
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

    background: url(../assets/pexels-pixabay-326279.webp);

    background-size: cover;
    background-repeat: no-repeat;

    width: 100%;
    height: 100vh;
    overflow: scroll;

}

.main-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    width: 100%;
}

.welcome-message {
    padding: 4% 0;
    width: 100%;

    margin: 20px 0;

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
