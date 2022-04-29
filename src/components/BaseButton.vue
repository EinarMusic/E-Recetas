<template>
    <div class="btn-side-bar" v-bind="$attrs" v-on="$listeners">
        <p>{{ label }}</p>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            value: {
                type: String,
                default: ''
            }
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                click: this.onClick
            };
        },
    },
    methods: {
        onClick(event) {
            this.$emit('clicked', event);
        }
    }
}
</script>

<style scoped>
.btn-side-bar {
    margin-top: 15px;
}

.btn-side-bar p {
    display: inline-block;
    cursor: pointer;

    width: 200px;
    padding: 5px 15px;

    border-radius: 20px;
    background-color: #60ab59;

    text-align: center;
    font-size: 20px;
    color: white;
}
</style>