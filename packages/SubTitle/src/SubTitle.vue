<template>
    <div class="f-sub-title">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FSubTitle"
    }
</script>

<style scoped>
    .f-sub-title{
        padding: 8px 0 8px 30px;
        background-color: rgba(204, 204, 204, 0.5);
        font-size: 30px;
        font-weight: bold;
    }
</style>