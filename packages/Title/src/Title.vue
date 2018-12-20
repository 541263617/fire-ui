<template>
    <p class="f-title">
        <slot></slot>
    </p>
</template>

<script>
    export default {
        name: "FTitle"
    }
</script>

<style lang="scss" scoped>
    .f-title {
        margin-top: 72px;
        padding-left: 30px;
        padding-bottom: 20px;
        font-size: 30px;
        font-weight: bold;
    }
</style>