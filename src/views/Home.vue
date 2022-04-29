<template>
    <div>
        <div class="wrap-all">
            <div class="main-content">
                <div class="welcome-message">
                    <h1>
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

export default {
    methods: {
        ...mapActions(["getDataFromRecommendation"]),
        ...mapMutations(["getFoodInfo"]),
        recommendationPage(url, info) {
            this.getDataFromRecommendation(url);
            this.getFoodInfo([info]);
            this.$router.push("/recetas");
        },
    },
    data() {
        return {
            recommendation: [
                {
                    title: "Vegan",
                    img: [
                        "https://edamam-product-images.s3.amazonaws.com/web-img/7ee/7ee22e9973f93c37c659c2831fc21812.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLWVhc3QtMSJGMEQCIHcTllCvlVYw5htO947JX9on8tV0oPMpL1ObtRxf7z0UAiAOMn0KR%2F1rEg7ivnRjPD%2BwPI0X9dvagQae8Z2qnjSV%2FSrbBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMG6ESCWz0exveAbv%2FKq8EFdbh4BjatFMhZH38CO9dsHXSMPJmyrXBfCKlc3SPtpBzPo2wINb8v1GU904ZWNFlm4q1XZa4bkTaad0BBaZP%2FlHg4LYM66BmPeV74zsgzazPTtMQHcHIQ%2BxKNvCSq6kQIGoI55nyoHCrVdTiKPNMDGWGUPPuAU0%2FplBeUzMXB8bQX63ygU5tJu0sGPnBFftj8UBAZ7E5GyImdA7GiKFjAjVbUacPVP3FGXToyvDnqhoDVFvtz9GzaqLeFAedrg5HJvg0T2H%2Bl3gkm%2BKeZfj6Q%2Bw3LxtmJFzfWBQbURmDkqVolleWC%2FYu4HTnGIL2f7%2BWDkf5Nyuv2icSnXjlT3T8cguwz7i5vNvWhUN4MswS%2B3YPrzM%2FVX%2BhEEAOf4XspF3lFFT8Vb%2FQLhDwjILA6nXCiNoTSoBQ8rBfOD3SqKoBmA9TQh6NDfBa%2FwE0FOJeJbt2nMJhay07CvqE6LJLmcZSsbxS9kEFXyQ3zS1BULKXr9IFSi5Ddjq%2Bp6RUvXTvT5NvGHL4WlIryQBJ8yM5A3pPZNjgbonHDJXQ%2Fnxt1OPwdYmz7NJZC18WFUsZQVBdDLjJPPYXK3PSNqcpoOugIFt6n0OGM%2Ff%2B78IqGGEuWZOJNdDlmWKOKqhqNNhLvXrLpze%2Fh0Rl4RogUUgBnfa%2F3afTz49aKFp7uX3SFq3IIAZ2t6PhI0OETqEYT3FMzITi36qPix73AIv9iwEFYXKpUF7wgYt7ftvCL4pBD8OIetQ61jD76KqTBjqqAag6dfcDpBjlbwYlhe0f24gx0jDhNy9VnSnkhIEnWV0skSEfsnSs%2BS5B5Vru94e4EYY2rgSN8Z8aa2bBe6TThe2sn8Ma8uFUG9B1mS5z0ji3KMExjTL%2BUSzRbrkFwB9yvc1kkWyHc63Msit8d%2BhTD09EGEZNyNXNwhDDLahUmTVdsF1fzEf9z8Ct814fK%2F8JFkvQmx4iIZp%2F0nUi%2B3ezvG252vsB9t15KDSD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T163827Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPRQ67T5Y%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=522ade92a54d8c66e9c9c5d83ca10ce4b8e801d3c00957cb721b171840ee9279",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/648/64838d3745fb47c7885ad5f0abf212c1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLWVhc3QtMSJGMEQCIHcTllCvlVYw5htO947JX9on8tV0oPMpL1ObtRxf7z0UAiAOMn0KR%2F1rEg7ivnRjPD%2BwPI0X9dvagQae8Z2qnjSV%2FSrbBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMG6ESCWz0exveAbv%2FKq8EFdbh4BjatFMhZH38CO9dsHXSMPJmyrXBfCKlc3SPtpBzPo2wINb8v1GU904ZWNFlm4q1XZa4bkTaad0BBaZP%2FlHg4LYM66BmPeV74zsgzazPTtMQHcHIQ%2BxKNvCSq6kQIGoI55nyoHCrVdTiKPNMDGWGUPPuAU0%2FplBeUzMXB8bQX63ygU5tJu0sGPnBFftj8UBAZ7E5GyImdA7GiKFjAjVbUacPVP3FGXToyvDnqhoDVFvtz9GzaqLeFAedrg5HJvg0T2H%2Bl3gkm%2BKeZfj6Q%2Bw3LxtmJFzfWBQbURmDkqVolleWC%2FYu4HTnGIL2f7%2BWDkf5Nyuv2icSnXjlT3T8cguwz7i5vNvWhUN4MswS%2B3YPrzM%2FVX%2BhEEAOf4XspF3lFFT8Vb%2FQLhDwjILA6nXCiNoTSoBQ8rBfOD3SqKoBmA9TQh6NDfBa%2FwE0FOJeJbt2nMJhay07CvqE6LJLmcZSsbxS9kEFXyQ3zS1BULKXr9IFSi5Ddjq%2Bp6RUvXTvT5NvGHL4WlIryQBJ8yM5A3pPZNjgbonHDJXQ%2Fnxt1OPwdYmz7NJZC18WFUsZQVBdDLjJPPYXK3PSNqcpoOugIFt6n0OGM%2Ff%2B78IqGGEuWZOJNdDlmWKOKqhqNNhLvXrLpze%2Fh0Rl4RogUUgBnfa%2F3afTz49aKFp7uX3SFq3IIAZ2t6PhI0OETqEYT3FMzITi36qPix73AIv9iwEFYXKpUF7wgYt7ftvCL4pBD8OIetQ61jD76KqTBjqqAag6dfcDpBjlbwYlhe0f24gx0jDhNy9VnSnkhIEnWV0skSEfsnSs%2BS5B5Vru94e4EYY2rgSN8Z8aa2bBe6TThe2sn8Ma8uFUG9B1mS5z0ji3KMExjTL%2BUSzRbrkFwB9yvc1kkWyHc63Msit8d%2BhTD09EGEZNyNXNwhDDLahUmTVdsF1fzEf9z8Ct814fK%2F8JFkvQmx4iIZp%2F0nUi%2B3ezvG252vsB9t15KDSD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T163827Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPRQ67T5Y%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=32dabc8a01187fd69594eec791701d4636462538b0c940629d2b8bb0bb62c4d2",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/e97/e974c1a08c8d4de84b72859cfe7c0a86?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLWVhc3QtMSJGMEQCIHcTllCvlVYw5htO947JX9on8tV0oPMpL1ObtRxf7z0UAiAOMn0KR%2F1rEg7ivnRjPD%2BwPI0X9dvagQae8Z2qnjSV%2FSrbBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMG6ESCWz0exveAbv%2FKq8EFdbh4BjatFMhZH38CO9dsHXSMPJmyrXBfCKlc3SPtpBzPo2wINb8v1GU904ZWNFlm4q1XZa4bkTaad0BBaZP%2FlHg4LYM66BmPeV74zsgzazPTtMQHcHIQ%2BxKNvCSq6kQIGoI55nyoHCrVdTiKPNMDGWGUPPuAU0%2FplBeUzMXB8bQX63ygU5tJu0sGPnBFftj8UBAZ7E5GyImdA7GiKFjAjVbUacPVP3FGXToyvDnqhoDVFvtz9GzaqLeFAedrg5HJvg0T2H%2Bl3gkm%2BKeZfj6Q%2Bw3LxtmJFzfWBQbURmDkqVolleWC%2FYu4HTnGIL2f7%2BWDkf5Nyuv2icSnXjlT3T8cguwz7i5vNvWhUN4MswS%2B3YPrzM%2FVX%2BhEEAOf4XspF3lFFT8Vb%2FQLhDwjILA6nXCiNoTSoBQ8rBfOD3SqKoBmA9TQh6NDfBa%2FwE0FOJeJbt2nMJhay07CvqE6LJLmcZSsbxS9kEFXyQ3zS1BULKXr9IFSi5Ddjq%2Bp6RUvXTvT5NvGHL4WlIryQBJ8yM5A3pPZNjgbonHDJXQ%2Fnxt1OPwdYmz7NJZC18WFUsZQVBdDLjJPPYXK3PSNqcpoOugIFt6n0OGM%2Ff%2B78IqGGEuWZOJNdDlmWKOKqhqNNhLvXrLpze%2Fh0Rl4RogUUgBnfa%2F3afTz49aKFp7uX3SFq3IIAZ2t6PhI0OETqEYT3FMzITi36qPix73AIv9iwEFYXKpUF7wgYt7ftvCL4pBD8OIetQ61jD76KqTBjqqAag6dfcDpBjlbwYlhe0f24gx0jDhNy9VnSnkhIEnWV0skSEfsnSs%2BS5B5Vru94e4EYY2rgSN8Z8aa2bBe6TThe2sn8Ma8uFUG9B1mS5z0ji3KMExjTL%2BUSzRbrkFwB9yvc1kkWyHc63Msit8d%2BhTD09EGEZNyNXNwhDDLahUmTVdsF1fzEf9z8Ct814fK%2F8JFkvQmx4iIZp%2F0nUi%2B3ezvG252vsB9t15KDSD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T163827Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPRQ67T5Y%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5606fea2a165723d0aa165b4116f97483ecca4c90b95c7b190a3291946bfa79a",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/5b9/5b9d077eed8c38dbd7d1df7431022313.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLWVhc3QtMSJGMEQCIHcTllCvlVYw5htO947JX9on8tV0oPMpL1ObtRxf7z0UAiAOMn0KR%2F1rEg7ivnRjPD%2BwPI0X9dvagQae8Z2qnjSV%2FSrbBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMG6ESCWz0exveAbv%2FKq8EFdbh4BjatFMhZH38CO9dsHXSMPJmyrXBfCKlc3SPtpBzPo2wINb8v1GU904ZWNFlm4q1XZa4bkTaad0BBaZP%2FlHg4LYM66BmPeV74zsgzazPTtMQHcHIQ%2BxKNvCSq6kQIGoI55nyoHCrVdTiKPNMDGWGUPPuAU0%2FplBeUzMXB8bQX63ygU5tJu0sGPnBFftj8UBAZ7E5GyImdA7GiKFjAjVbUacPVP3FGXToyvDnqhoDVFvtz9GzaqLeFAedrg5HJvg0T2H%2Bl3gkm%2BKeZfj6Q%2Bw3LxtmJFzfWBQbURmDkqVolleWC%2FYu4HTnGIL2f7%2BWDkf5Nyuv2icSnXjlT3T8cguwz7i5vNvWhUN4MswS%2B3YPrzM%2FVX%2BhEEAOf4XspF3lFFT8Vb%2FQLhDwjILA6nXCiNoTSoBQ8rBfOD3SqKoBmA9TQh6NDfBa%2FwE0FOJeJbt2nMJhay07CvqE6LJLmcZSsbxS9kEFXyQ3zS1BULKXr9IFSi5Ddjq%2Bp6RUvXTvT5NvGHL4WlIryQBJ8yM5A3pPZNjgbonHDJXQ%2Fnxt1OPwdYmz7NJZC18WFUsZQVBdDLjJPPYXK3PSNqcpoOugIFt6n0OGM%2Ff%2B78IqGGEuWZOJNdDlmWKOKqhqNNhLvXrLpze%2Fh0Rl4RogUUgBnfa%2F3afTz49aKFp7uX3SFq3IIAZ2t6PhI0OETqEYT3FMzITi36qPix73AIv9iwEFYXKpUF7wgYt7ftvCL4pBD8OIetQ61jD76KqTBjqqAag6dfcDpBjlbwYlhe0f24gx0jDhNy9VnSnkhIEnWV0skSEfsnSs%2BS5B5Vru94e4EYY2rgSN8Z8aa2bBe6TThe2sn8Ma8uFUG9B1mS5z0ji3KMExjTL%2BUSzRbrkFwB9yvc1kkWyHc63Msit8d%2BhTD09EGEZNyNXNwhDDLahUmTVdsF1fzEf9z8Ct814fK%2F8JFkvQmx4iIZp%2F0nUi%2B3ezvG252vsB9t15KDSD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T164246Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPRQ67T5Y%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=913a8b2d95ee6d86e3db946952294cb10be6f20a02803eb62f32397074edfa08",
                    ],
                    description: "High-protein · Dinner · Italian",
                    url:
                        "https://api.edamam.com/api/recipes/v2?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4&health=vegan&cuisineType=Italian&mealType=Dinner",
                },
                {
                    title: "Vegetarian",
                    img: [
                        "https://edamam-product-images.s3.amazonaws.com/web-img/233/2332f5d67ea3b52347f6493d47910922.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLWVhc3QtMSJGMEQCIHcTllCvlVYw5htO947JX9on8tV0oPMpL1ObtRxf7z0UAiAOMn0KR%2F1rEg7ivnRjPD%2BwPI0X9dvagQae8Z2qnjSV%2FSrbBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMG6ESCWz0exveAbv%2FKq8EFdbh4BjatFMhZH38CO9dsHXSMPJmyrXBfCKlc3SPtpBzPo2wINb8v1GU904ZWNFlm4q1XZa4bkTaad0BBaZP%2FlHg4LYM66BmPeV74zsgzazPTtMQHcHIQ%2BxKNvCSq6kQIGoI55nyoHCrVdTiKPNMDGWGUPPuAU0%2FplBeUzMXB8bQX63ygU5tJu0sGPnBFftj8UBAZ7E5GyImdA7GiKFjAjVbUacPVP3FGXToyvDnqhoDVFvtz9GzaqLeFAedrg5HJvg0T2H%2Bl3gkm%2BKeZfj6Q%2Bw3LxtmJFzfWBQbURmDkqVolleWC%2FYu4HTnGIL2f7%2BWDkf5Nyuv2icSnXjlT3T8cguwz7i5vNvWhUN4MswS%2B3YPrzM%2FVX%2BhEEAOf4XspF3lFFT8Vb%2FQLhDwjILA6nXCiNoTSoBQ8rBfOD3SqKoBmA9TQh6NDfBa%2FwE0FOJeJbt2nMJhay07CvqE6LJLmcZSsbxS9kEFXyQ3zS1BULKXr9IFSi5Ddjq%2Bp6RUvXTvT5NvGHL4WlIryQBJ8yM5A3pPZNjgbonHDJXQ%2Fnxt1OPwdYmz7NJZC18WFUsZQVBdDLjJPPYXK3PSNqcpoOugIFt6n0OGM%2Ff%2B78IqGGEuWZOJNdDlmWKOKqhqNNhLvXrLpze%2Fh0Rl4RogUUgBnfa%2F3afTz49aKFp7uX3SFq3IIAZ2t6PhI0OETqEYT3FMzITi36qPix73AIv9iwEFYXKpUF7wgYt7ftvCL4pBD8OIetQ61jD76KqTBjqqAag6dfcDpBjlbwYlhe0f24gx0jDhNy9VnSnkhIEnWV0skSEfsnSs%2BS5B5Vru94e4EYY2rgSN8Z8aa2bBe6TThe2sn8Ma8uFUG9B1mS5z0ji3KMExjTL%2BUSzRbrkFwB9yvc1kkWyHc63Msit8d%2BhTD09EGEZNyNXNwhDDLahUmTVdsF1fzEf9z8Ct814fK%2F8JFkvQmx4iIZp%2F0nUi%2B3ezvG252vsB9t15KDSD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T164458Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPRQ67T5Y%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b6f4182e94c16450b767ad52715867e76c8401cff84e5629572ab5a38064caf5",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/4ac/4ac85a724c10963ba497afcc71e4d435?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLWVhc3QtMSJGMEQCIHcTllCvlVYw5htO947JX9on8tV0oPMpL1ObtRxf7z0UAiAOMn0KR%2F1rEg7ivnRjPD%2BwPI0X9dvagQae8Z2qnjSV%2FSrbBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMG6ESCWz0exveAbv%2FKq8EFdbh4BjatFMhZH38CO9dsHXSMPJmyrXBfCKlc3SPtpBzPo2wINb8v1GU904ZWNFlm4q1XZa4bkTaad0BBaZP%2FlHg4LYM66BmPeV74zsgzazPTtMQHcHIQ%2BxKNvCSq6kQIGoI55nyoHCrVdTiKPNMDGWGUPPuAU0%2FplBeUzMXB8bQX63ygU5tJu0sGPnBFftj8UBAZ7E5GyImdA7GiKFjAjVbUacPVP3FGXToyvDnqhoDVFvtz9GzaqLeFAedrg5HJvg0T2H%2Bl3gkm%2BKeZfj6Q%2Bw3LxtmJFzfWBQbURmDkqVolleWC%2FYu4HTnGIL2f7%2BWDkf5Nyuv2icSnXjlT3T8cguwz7i5vNvWhUN4MswS%2B3YPrzM%2FVX%2BhEEAOf4XspF3lFFT8Vb%2FQLhDwjILA6nXCiNoTSoBQ8rBfOD3SqKoBmA9TQh6NDfBa%2FwE0FOJeJbt2nMJhay07CvqE6LJLmcZSsbxS9kEFXyQ3zS1BULKXr9IFSi5Ddjq%2Bp6RUvXTvT5NvGHL4WlIryQBJ8yM5A3pPZNjgbonHDJXQ%2Fnxt1OPwdYmz7NJZC18WFUsZQVBdDLjJPPYXK3PSNqcpoOugIFt6n0OGM%2Ff%2B78IqGGEuWZOJNdDlmWKOKqhqNNhLvXrLpze%2Fh0Rl4RogUUgBnfa%2F3afTz49aKFp7uX3SFq3IIAZ2t6PhI0OETqEYT3FMzITi36qPix73AIv9iwEFYXKpUF7wgYt7ftvCL4pBD8OIetQ61jD76KqTBjqqAag6dfcDpBjlbwYlhe0f24gx0jDhNy9VnSnkhIEnWV0skSEfsnSs%2BS5B5Vru94e4EYY2rgSN8Z8aa2bBe6TThe2sn8Ma8uFUG9B1mS5z0ji3KMExjTL%2BUSzRbrkFwB9yvc1kkWyHc63Msit8d%2BhTD09EGEZNyNXNwhDDLahUmTVdsF1fzEf9z8Ct814fK%2F8JFkvQmx4iIZp%2F0nUi%2B3ezvG252vsB9t15KDSD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T164458Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPRQ67T5Y%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0619e919984d4fee32748ab30c30d65005b4580319faad5f9adbfb962e365477",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/c50/c50db7d7811a9a207c6a61ad95e132b1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLWVhc3QtMSJGMEQCIHcTllCvlVYw5htO947JX9on8tV0oPMpL1ObtRxf7z0UAiAOMn0KR%2F1rEg7ivnRjPD%2BwPI0X9dvagQae8Z2qnjSV%2FSrbBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMG6ESCWz0exveAbv%2FKq8EFdbh4BjatFMhZH38CO9dsHXSMPJmyrXBfCKlc3SPtpBzPo2wINb8v1GU904ZWNFlm4q1XZa4bkTaad0BBaZP%2FlHg4LYM66BmPeV74zsgzazPTtMQHcHIQ%2BxKNvCSq6kQIGoI55nyoHCrVdTiKPNMDGWGUPPuAU0%2FplBeUzMXB8bQX63ygU5tJu0sGPnBFftj8UBAZ7E5GyImdA7GiKFjAjVbUacPVP3FGXToyvDnqhoDVFvtz9GzaqLeFAedrg5HJvg0T2H%2Bl3gkm%2BKeZfj6Q%2Bw3LxtmJFzfWBQbURmDkqVolleWC%2FYu4HTnGIL2f7%2BWDkf5Nyuv2icSnXjlT3T8cguwz7i5vNvWhUN4MswS%2B3YPrzM%2FVX%2BhEEAOf4XspF3lFFT8Vb%2FQLhDwjILA6nXCiNoTSoBQ8rBfOD3SqKoBmA9TQh6NDfBa%2FwE0FOJeJbt2nMJhay07CvqE6LJLmcZSsbxS9kEFXyQ3zS1BULKXr9IFSi5Ddjq%2Bp6RUvXTvT5NvGHL4WlIryQBJ8yM5A3pPZNjgbonHDJXQ%2Fnxt1OPwdYmz7NJZC18WFUsZQVBdDLjJPPYXK3PSNqcpoOugIFt6n0OGM%2Ff%2B78IqGGEuWZOJNdDlmWKOKqhqNNhLvXrLpze%2Fh0Rl4RogUUgBnfa%2F3afTz49aKFp7uX3SFq3IIAZ2t6PhI0OETqEYT3FMzITi36qPix73AIv9iwEFYXKpUF7wgYt7ftvCL4pBD8OIetQ61jD76KqTBjqqAag6dfcDpBjlbwYlhe0f24gx0jDhNy9VnSnkhIEnWV0skSEfsnSs%2BS5B5Vru94e4EYY2rgSN8Z8aa2bBe6TThe2sn8Ma8uFUG9B1mS5z0ji3KMExjTL%2BUSzRbrkFwB9yvc1kkWyHc63Msit8d%2BhTD09EGEZNyNXNwhDDLahUmTVdsF1fzEf9z8Ct814fK%2F8JFkvQmx4iIZp%2F0nUi%2B3ezvG252vsB9t15KDSD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T164458Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPRQ67T5Y%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d0f1f01f2caed5bf08a499e954de94b7beb5816fdc7832f8444f52e671edfe07",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/624/6245dfb022326a01cd27dc50c887ea95?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLWVhc3QtMSJGMEQCIHcTllCvlVYw5htO947JX9on8tV0oPMpL1ObtRxf7z0UAiAOMn0KR%2F1rEg7ivnRjPD%2BwPI0X9dvagQae8Z2qnjSV%2FSrbBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMG6ESCWz0exveAbv%2FKq8EFdbh4BjatFMhZH38CO9dsHXSMPJmyrXBfCKlc3SPtpBzPo2wINb8v1GU904ZWNFlm4q1XZa4bkTaad0BBaZP%2FlHg4LYM66BmPeV74zsgzazPTtMQHcHIQ%2BxKNvCSq6kQIGoI55nyoHCrVdTiKPNMDGWGUPPuAU0%2FplBeUzMXB8bQX63ygU5tJu0sGPnBFftj8UBAZ7E5GyImdA7GiKFjAjVbUacPVP3FGXToyvDnqhoDVFvtz9GzaqLeFAedrg5HJvg0T2H%2Bl3gkm%2BKeZfj6Q%2Bw3LxtmJFzfWBQbURmDkqVolleWC%2FYu4HTnGIL2f7%2BWDkf5Nyuv2icSnXjlT3T8cguwz7i5vNvWhUN4MswS%2B3YPrzM%2FVX%2BhEEAOf4XspF3lFFT8Vb%2FQLhDwjILA6nXCiNoTSoBQ8rBfOD3SqKoBmA9TQh6NDfBa%2FwE0FOJeJbt2nMJhay07CvqE6LJLmcZSsbxS9kEFXyQ3zS1BULKXr9IFSi5Ddjq%2Bp6RUvXTvT5NvGHL4WlIryQBJ8yM5A3pPZNjgbonHDJXQ%2Fnxt1OPwdYmz7NJZC18WFUsZQVBdDLjJPPYXK3PSNqcpoOugIFt6n0OGM%2Ff%2B78IqGGEuWZOJNdDlmWKOKqhqNNhLvXrLpze%2Fh0Rl4RogUUgBnfa%2F3afTz49aKFp7uX3SFq3IIAZ2t6PhI0OETqEYT3FMzITi36qPix73AIv9iwEFYXKpUF7wgYt7ftvCL4pBD8OIetQ61jD76KqTBjqqAag6dfcDpBjlbwYlhe0f24gx0jDhNy9VnSnkhIEnWV0skSEfsnSs%2BS5B5Vru94e4EYY2rgSN8Z8aa2bBe6TThe2sn8Ma8uFUG9B1mS5z0ji3KMExjTL%2BUSzRbrkFwB9yvc1kkWyHc63Msit8d%2BhTD09EGEZNyNXNwhDDLahUmTVdsF1fzEf9z8Ct814fK%2F8JFkvQmx4iIZp%2F0nUi%2B3ezvG252vsB9t15KDSD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T164724Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPRQ67T5Y%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=13846efb592ae8dfce689ecca0c537e12a4de4f43c7e3766301c98c30ef248ad",
                    ],
                    description: "High-protein · Lunch · Asian",
                    url:
                        "https://api.edamam.com/api/recipes/v2?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4&diet=high-protein&health=vegetarian&cuisineType=Asian&mealType=Lunch",
                },
                {
                    title: "Kosher",
                    img: [
                        "https://edamam-product-images.s3.amazonaws.com/web-img/db4/db4cb081f6d2106f6dcc19ee5a3ff6da?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLWVhc3QtMSJGMEQCIDE0FxFxlYEolMxdF2vPIaufWABz98mbxrViLY0JFg7hAiBH88zvNzKHOUqaK0dQUVBRX7yGGGXUng8xU3fUT%2Fkx5CrbBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMGP0zRW3C1PMBwQUCKq8ED6XgvyAKO2UvcZoV32uX2DnPyPdgB7%2BkSUL3UBlBDZU00qGGKJuVtIjNKu78A8VDmhx7Hz1X9WSPUDihdgp6DEoFQLmPhZa6dsc5wgdwOG5%2FMa81wGRmlGkUUn8UDxT%2FrEPN%2FG0sw6Nx6Qt679V1vBnASMnjb3hrWhucntG6zgMf2e1YYcUMhXWv8J%2BtYf4H3xpux4vQY9XfiZgnnzLfFwbO8Mv%2FsenCLnBQMnbGv%2F8Cc813t%2Fm6N%2FLP5%2BrAYnxlBE5xsn1zS7iCu3XiKXl2754uN6KZLgDNTbL%2Fc6NZCTgFJQNIsiKs%2ByAw7nkbgXU0lmYYnfSSSRw7vKEpP6C13AbY64Z97UVUjxw0ZQj3pDdgxqngB933hU%2B9sqFwvLUtXiqasaa6nTPeU70KZTIsG7iwLH5sY7xw5RjgU8tml%2Feda%2B%2FjHau1qLbfIBDZ8tPiN8P7R%2BCPgZvPIUZlDBst6MGpuK4o6NYjT93RLhM%2FV2kj8vK5SumAQzpR44LHt7jyrDoG7w9gNEd7O4reMr93R9ot0Oldz1aQgMn3wKKxCyiKDrLA8xTaXT8LJ33MFtLhoDjsRGifYcgFzN8CqlBH%2Fk2hKcR8P%2FeXlwiNneeKG8Iq78eC6yVPdDl6986TSCUSpTPXOrPOdQDRt86NcxdTM2vfKWkuw%2F%2Fnc608D6gdSQLFBxoAXU2MT74DlD7Ju07Kq3XRSHlJ8ux7gduzU3MgD5qwPmgtf2e5hOcXejW24DDihauTBjqqAed3RLXKa5Ip%2Fxs8HwkJ9k2eFcL8RsYAjVVI6vMMecTgBJ%2FYVwXVjtn1lMw9QDLyixIre6WObmUDbkUWRhNqNvSUZYCNme7%2FthqbG9Rb4t3rEaVq99EHFTTmfxhmYxIDush260WjdnlDYIwm7Kifl40%2FakBILT87uqQF2A32rXN%2FnIOIg%2FH2mVldrfiYSUw%2Bc2774Kl3qemn%2BVf063JBHKAtp5ZmYjnhLKqY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T173002Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHQFCUGOQ%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9af5afeb4830bb186dd2cb459dbbc5dc42ffed4f852cdcc742f13921c359c736",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/20a/20a267bca080cfc21a01ea837cada9ba?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLWVhc3QtMSJGMEQCIDE0FxFxlYEolMxdF2vPIaufWABz98mbxrViLY0JFg7hAiBH88zvNzKHOUqaK0dQUVBRX7yGGGXUng8xU3fUT%2Fkx5CrbBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMGP0zRW3C1PMBwQUCKq8ED6XgvyAKO2UvcZoV32uX2DnPyPdgB7%2BkSUL3UBlBDZU00qGGKJuVtIjNKu78A8VDmhx7Hz1X9WSPUDihdgp6DEoFQLmPhZa6dsc5wgdwOG5%2FMa81wGRmlGkUUn8UDxT%2FrEPN%2FG0sw6Nx6Qt679V1vBnASMnjb3hrWhucntG6zgMf2e1YYcUMhXWv8J%2BtYf4H3xpux4vQY9XfiZgnnzLfFwbO8Mv%2FsenCLnBQMnbGv%2F8Cc813t%2Fm6N%2FLP5%2BrAYnxlBE5xsn1zS7iCu3XiKXl2754uN6KZLgDNTbL%2Fc6NZCTgFJQNIsiKs%2ByAw7nkbgXU0lmYYnfSSSRw7vKEpP6C13AbY64Z97UVUjxw0ZQj3pDdgxqngB933hU%2B9sqFwvLUtXiqasaa6nTPeU70KZTIsG7iwLH5sY7xw5RjgU8tml%2Feda%2B%2FjHau1qLbfIBDZ8tPiN8P7R%2BCPgZvPIUZlDBst6MGpuK4o6NYjT93RLhM%2FV2kj8vK5SumAQzpR44LHt7jyrDoG7w9gNEd7O4reMr93R9ot0Oldz1aQgMn3wKKxCyiKDrLA8xTaXT8LJ33MFtLhoDjsRGifYcgFzN8CqlBH%2Fk2hKcR8P%2FeXlwiNneeKG8Iq78eC6yVPdDl6986TSCUSpTPXOrPOdQDRt86NcxdTM2vfKWkuw%2F%2Fnc608D6gdSQLFBxoAXU2MT74DlD7Ju07Kq3XRSHlJ8ux7gduzU3MgD5qwPmgtf2e5hOcXejW24DDihauTBjqqAed3RLXKa5Ip%2Fxs8HwkJ9k2eFcL8RsYAjVVI6vMMecTgBJ%2FYVwXVjtn1lMw9QDLyixIre6WObmUDbkUWRhNqNvSUZYCNme7%2FthqbG9Rb4t3rEaVq99EHFTTmfxhmYxIDush260WjdnlDYIwm7Kifl40%2FakBILT87uqQF2A32rXN%2FnIOIg%2FH2mVldrfiYSUw%2Bc2774Kl3qemn%2BVf063JBHKAtp5ZmYjnhLKqY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T173002Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFHQFCUGOQ%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1ebefc95b0c61b2627cdd01d6b4b87d8af386115bd654ef3c4e69b6bf97414c9",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/246/246bf0ec2521742391a6757ae6da3b17.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLWVhc3QtMSJGMEQCIDE0FxFxlYEolMxdF2vPIaufWABz98mbxrViLY0JFg7hAiBH88zvNzKHOUqaK0dQUVBRX7yGGGXUng8xU3fUT%2Fkx5CrbBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMGP0zRW3C1PMBwQUCKq8ED6XgvyAKO2UvcZoV32uX2DnPyPdgB7%2BkSUL3UBlBDZU00qGGKJuVtIjNKu78A8VDmhx7Hz1X9WSPUDihdgp6DEoFQLmPhZa6dsc5wgdwOG5%2FMa81wGRmlGkUUn8UDxT%2FrEPN%2FG0sw6Nx6Qt679V1vBnASMnjb3hrWhucntG6zgMf2e1YYcUMhXWv8J%2BtYf4H3xpux4vQY9XfiZgnnzLfFwbO8Mv%2FsenCLnBQMnbGv%2F8Cc813t%2Fm6N%2FLP5%2BrAYnxlBE5xsn1zS7iCu3XiKXl2754uN6KZLgDNTbL%2Fc6NZCTgFJQNIsiKs%2ByAw7nkbgXU0lmYYnfSSSRw7vKEpP6C13AbY64Z97UVUjxw0ZQj3pDdgxqngB933hU%2B9sqFwvLUtXiqasaa6nTPeU70KZTIsG7iwLH5sY7xw5RjgU8tml%2Feda%2B%2FjHau1qLbfIBDZ8tPiN8P7R%2BCPgZvPIUZlDBst6MGpuK4o6NYjT93RLhM%2FV2kj8vK5SumAQzpR44LHt7jyrDoG7w9gNEd7O4reMr93R9ot0Oldz1aQgMn3wKKxCyiKDrLA8xTaXT8LJ33MFtLhoDjsRGifYcgFzN8CqlBH%2Fk2hKcR8P%2FeXlwiNneeKG8Iq78eC6yVPdDl6986TSCUSpTPXOrPOdQDRt86NcxdTM2vfKWkuw%2F%2Fnc608D6gdSQLFBxoAXU2MT74DlD7Ju07Kq3XRSHlJ8ux7gduzU3MgD5qwPmgtf2e5hOcXejW24DDihauTBjqqAed3RLXKa5Ip%2Fxs8HwkJ9k2eFcL8RsYAjVVI6vMMecTgBJ%2FYVwXVjtn1lMw9QDLyixIre6WObmUDbkUWRhNqNvSUZYCNme7%2FthqbG9Rb4t3rEaVq99EHFTTmfxhmYxIDush260WjdnlDYIwm7Kifl40%2FakBILT87uqQF2A32rXN%2FnIOIg%2FH2mVldrfiYSUw%2Bc2774Kl3qemn%2BVf063JBHKAtp5ZmYjnhLKqY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T173002Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHQFCUGOQ%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b75392a371f4c7ac7e8975fb4121f1390d615ba4e5004dedf4ad0cb4f618e398",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/a33/a332121eaa60a84c93174a5ee54e06b2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLWVhc3QtMSJGMEQCIDE0FxFxlYEolMxdF2vPIaufWABz98mbxrViLY0JFg7hAiBH88zvNzKHOUqaK0dQUVBRX7yGGGXUng8xU3fUT%2Fkx5CrbBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMGP0zRW3C1PMBwQUCKq8ED6XgvyAKO2UvcZoV32uX2DnPyPdgB7%2BkSUL3UBlBDZU00qGGKJuVtIjNKu78A8VDmhx7Hz1X9WSPUDihdgp6DEoFQLmPhZa6dsc5wgdwOG5%2FMa81wGRmlGkUUn8UDxT%2FrEPN%2FG0sw6Nx6Qt679V1vBnASMnjb3hrWhucntG6zgMf2e1YYcUMhXWv8J%2BtYf4H3xpux4vQY9XfiZgnnzLfFwbO8Mv%2FsenCLnBQMnbGv%2F8Cc813t%2Fm6N%2FLP5%2BrAYnxlBE5xsn1zS7iCu3XiKXl2754uN6KZLgDNTbL%2Fc6NZCTgFJQNIsiKs%2ByAw7nkbgXU0lmYYnfSSSRw7vKEpP6C13AbY64Z97UVUjxw0ZQj3pDdgxqngB933hU%2B9sqFwvLUtXiqasaa6nTPeU70KZTIsG7iwLH5sY7xw5RjgU8tml%2Feda%2B%2FjHau1qLbfIBDZ8tPiN8P7R%2BCPgZvPIUZlDBst6MGpuK4o6NYjT93RLhM%2FV2kj8vK5SumAQzpR44LHt7jyrDoG7w9gNEd7O4reMr93R9ot0Oldz1aQgMn3wKKxCyiKDrLA8xTaXT8LJ33MFtLhoDjsRGifYcgFzN8CqlBH%2Fk2hKcR8P%2FeXlwiNneeKG8Iq78eC6yVPdDl6986TSCUSpTPXOrPOdQDRt86NcxdTM2vfKWkuw%2F%2Fnc608D6gdSQLFBxoAXU2MT74DlD7Ju07Kq3XRSHlJ8ux7gduzU3MgD5qwPmgtf2e5hOcXejW24DDihauTBjqqAed3RLXKa5Ip%2Fxs8HwkJ9k2eFcL8RsYAjVVI6vMMecTgBJ%2FYVwXVjtn1lMw9QDLyixIre6WObmUDbkUWRhNqNvSUZYCNme7%2FthqbG9Rb4t3rEaVq99EHFTTmfxhmYxIDush260WjdnlDYIwm7Kifl40%2FakBILT87uqQF2A32rXN%2FnIOIg%2FH2mVldrfiYSUw%2Bc2774Kl3qemn%2BVf063JBHKAtp5ZmYjnhLKqY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T173002Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHQFCUGOQ%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=20d962c3a8a4a68f9d37db486f5d144bf32d3e1166b2dd7049eadee5e9014849",
                    ],
                    description: "Low-carb · Breakfast · American",
                    url:
                        "https://api.edamam.com/api/recipes/v2?type=public&app_id=0632ab51&app_key=fa3b2b0a2a5ec0cd65c55d46742356a4&diet=low-carb&health=kosher&cuisineType=American&mealType=Breakfast",
                },
                {
                    title: "Keto friendly",
                    img: [
                        "https://edamam-product-images.s3.amazonaws.com/web-img/e1f/e1f78fd88ffeb833e2d40e2059b6af8f.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLWVhc3QtMSJGMEQCIDE0FxFxlYEolMxdF2vPIaufWABz98mbxrViLY0JFg7hAiBH88zvNzKHOUqaK0dQUVBRX7yGGGXUng8xU3fUT%2Fkx5CrbBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMGP0zRW3C1PMBwQUCKq8ED6XgvyAKO2UvcZoV32uX2DnPyPdgB7%2BkSUL3UBlBDZU00qGGKJuVtIjNKu78A8VDmhx7Hz1X9WSPUDihdgp6DEoFQLmPhZa6dsc5wgdwOG5%2FMa81wGRmlGkUUn8UDxT%2FrEPN%2FG0sw6Nx6Qt679V1vBnASMnjb3hrWhucntG6zgMf2e1YYcUMhXWv8J%2BtYf4H3xpux4vQY9XfiZgnnzLfFwbO8Mv%2FsenCLnBQMnbGv%2F8Cc813t%2Fm6N%2FLP5%2BrAYnxlBE5xsn1zS7iCu3XiKXl2754uN6KZLgDNTbL%2Fc6NZCTgFJQNIsiKs%2ByAw7nkbgXU0lmYYnfSSSRw7vKEpP6C13AbY64Z97UVUjxw0ZQj3pDdgxqngB933hU%2B9sqFwvLUtXiqasaa6nTPeU70KZTIsG7iwLH5sY7xw5RjgU8tml%2Feda%2B%2FjHau1qLbfIBDZ8tPiN8P7R%2BCPgZvPIUZlDBst6MGpuK4o6NYjT93RLhM%2FV2kj8vK5SumAQzpR44LHt7jyrDoG7w9gNEd7O4reMr93R9ot0Oldz1aQgMn3wKKxCyiKDrLA8xTaXT8LJ33MFtLhoDjsRGifYcgFzN8CqlBH%2Fk2hKcR8P%2FeXlwiNneeKG8Iq78eC6yVPdDl6986TSCUSpTPXOrPOdQDRt86NcxdTM2vfKWkuw%2F%2Fnc608D6gdSQLFBxoAXU2MT74DlD7Ju07Kq3XRSHlJ8ux7gduzU3MgD5qwPmgtf2e5hOcXejW24DDihauTBjqqAed3RLXKa5Ip%2Fxs8HwkJ9k2eFcL8RsYAjVVI6vMMecTgBJ%2FYVwXVjtn1lMw9QDLyixIre6WObmUDbkUWRhNqNvSUZYCNme7%2FthqbG9Rb4t3rEaVq99EHFTTmfxhmYxIDush260WjdnlDYIwm7Kifl40%2FakBILT87uqQF2A32rXN%2FnIOIg%2FH2mVldrfiYSUw%2Bc2774Kl3qemn%2BVf063JBHKAtp5ZmYjnhLKqY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T173319Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFHQFCUGOQ%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=66d390388860263ed04cf69766454f2c2ecdf99f57fe38fb35a9019ef86bc261",
                        "https://www.edamam.com/web-img/4da/4dab2c0d14b883762918e5ee07493c6e.jpg",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/8c6/8c6398aac035b8eb13294362d7eafeb2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLWVhc3QtMSJGMEQCIDE0FxFxlYEolMxdF2vPIaufWABz98mbxrViLY0JFg7hAiBH88zvNzKHOUqaK0dQUVBRX7yGGGXUng8xU3fUT%2Fkx5CrbBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMGP0zRW3C1PMBwQUCKq8ED6XgvyAKO2UvcZoV32uX2DnPyPdgB7%2BkSUL3UBlBDZU00qGGKJuVtIjNKu78A8VDmhx7Hz1X9WSPUDihdgp6DEoFQLmPhZa6dsc5wgdwOG5%2FMa81wGRmlGkUUn8UDxT%2FrEPN%2FG0sw6Nx6Qt679V1vBnASMnjb3hrWhucntG6zgMf2e1YYcUMhXWv8J%2BtYf4H3xpux4vQY9XfiZgnnzLfFwbO8Mv%2FsenCLnBQMnbGv%2F8Cc813t%2Fm6N%2FLP5%2BrAYnxlBE5xsn1zS7iCu3XiKXl2754uN6KZLgDNTbL%2Fc6NZCTgFJQNIsiKs%2ByAw7nkbgXU0lmYYnfSSSRw7vKEpP6C13AbY64Z97UVUjxw0ZQj3pDdgxqngB933hU%2B9sqFwvLUtXiqasaa6nTPeU70KZTIsG7iwLH5sY7xw5RjgU8tml%2Feda%2B%2FjHau1qLbfIBDZ8tPiN8P7R%2BCPgZvPIUZlDBst6MGpuK4o6NYjT93RLhM%2FV2kj8vK5SumAQzpR44LHt7jyrDoG7w9gNEd7O4reMr93R9ot0Oldz1aQgMn3wKKxCyiKDrLA8xTaXT8LJ33MFtLhoDjsRGifYcgFzN8CqlBH%2Fk2hKcR8P%2FeXlwiNneeKG8Iq78eC6yVPdDl6986TSCUSpTPXOrPOdQDRt86NcxdTM2vfKWkuw%2F%2Fnc608D6gdSQLFBxoAXU2MT74DlD7Ju07Kq3XRSHlJ8ux7gduzU3MgD5qwPmgtf2e5hOcXejW24DDihauTBjqqAed3RLXKa5Ip%2Fxs8HwkJ9k2eFcL8RsYAjVVI6vMMecTgBJ%2FYVwXVjtn1lMw9QDLyixIre6WObmUDbkUWRhNqNvSUZYCNme7%2FthqbG9Rb4t3rEaVq99EHFTTmfxhmYxIDush260WjdnlDYIwm7Kifl40%2FakBILT87uqQF2A32rXN%2FnIOIg%2FH2mVldrfiYSUw%2Bc2774Kl3qemn%2BVf063JBHKAtp5ZmYjnhLKqY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T173319Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHQFCUGOQ%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=586d725d6b6bdfb7ce9be4478d3d7f907d0807a9c8ac494e55df73f6ba5de2ae",
                        "https://edamam-product-images.s3.amazonaws.com/web-img/b2b/b2b23fe1be4d532b09d5080607f80868.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLWVhc3QtMSJGMEQCIDE0FxFxlYEolMxdF2vPIaufWABz98mbxrViLY0JFg7hAiBH88zvNzKHOUqaK0dQUVBRX7yGGGXUng8xU3fUT%2Fkx5CrbBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMGP0zRW3C1PMBwQUCKq8ED6XgvyAKO2UvcZoV32uX2DnPyPdgB7%2BkSUL3UBlBDZU00qGGKJuVtIjNKu78A8VDmhx7Hz1X9WSPUDihdgp6DEoFQLmPhZa6dsc5wgdwOG5%2FMa81wGRmlGkUUn8UDxT%2FrEPN%2FG0sw6Nx6Qt679V1vBnASMnjb3hrWhucntG6zgMf2e1YYcUMhXWv8J%2BtYf4H3xpux4vQY9XfiZgnnzLfFwbO8Mv%2FsenCLnBQMnbGv%2F8Cc813t%2Fm6N%2FLP5%2BrAYnxlBE5xsn1zS7iCu3XiKXl2754uN6KZLgDNTbL%2Fc6NZCTgFJQNIsiKs%2ByAw7nkbgXU0lmYYnfSSSRw7vKEpP6C13AbY64Z97UVUjxw0ZQj3pDdgxqngB933hU%2B9sqFwvLUtXiqasaa6nTPeU70KZTIsG7iwLH5sY7xw5RjgU8tml%2Feda%2B%2FjHau1qLbfIBDZ8tPiN8P7R%2BCPgZvPIUZlDBst6MGpuK4o6NYjT93RLhM%2FV2kj8vK5SumAQzpR44LHt7jyrDoG7w9gNEd7O4reMr93R9ot0Oldz1aQgMn3wKKxCyiKDrLA8xTaXT8LJ33MFtLhoDjsRGifYcgFzN8CqlBH%2Fk2hKcR8P%2FeXlwiNneeKG8Iq78eC6yVPdDl6986TSCUSpTPXOrPOdQDRt86NcxdTM2vfKWkuw%2F%2Fnc608D6gdSQLFBxoAXU2MT74DlD7Ju07Kq3XRSHlJ8ux7gduzU3MgD5qwPmgtf2e5hOcXejW24DDihauTBjqqAed3RLXKa5Ip%2Fxs8HwkJ9k2eFcL8RsYAjVVI6vMMecTgBJ%2FYVwXVjtn1lMw9QDLyixIre6WObmUDbkUWRhNqNvSUZYCNme7%2FthqbG9Rb4t3rEaVq99EHFTTmfxhmYxIDush260WjdnlDYIwm7Kifl40%2FakBILT87uqQF2A32rXN%2FnIOIg%2FH2mVldrfiYSUw%2Bc2774Kl3qemn%2BVf063JBHKAtp5ZmYjnhLKqY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220428T173319Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHQFCUGOQ%2F20220428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=68cb140157c729adba3c0e450cfe79a8aacb77af8c191f10ae5a302564634e29",
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
