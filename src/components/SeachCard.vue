<template>
    <div>
        <div class="content">
            <div class="content-description">
                <h2>{{ title }}</h2>
                <span>
                    <span>{{ description.first }} <strong>·</strong> {{ description.second }}</span>
                </span>
            </div>
            <div class="input">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: Object,
    }
};
</script>

<style scoped>
.content {
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

.input input {
    border: none;
    outline: none;

    border: 1px solid rgb(176, 176, 176);
    border-radius: 20px;

    text-align: center;

    padding: 5px 0;
    width: 90px;
}

.input .wrap-select {
    border: none;
    outline: none;

    border: 1px solid rgb(176, 176, 176);
    border-radius: 20px;

    padding: 5px 0;
    width: 90px;
}
</style>
