<template>
    <section class="f-view">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: 'FView',
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    .f-view {
        background-color: #fff;
        border-top: 1PX solid #ccc;
        border-bottom: 1PX solid #ccc;
        padding-left: 30px;
        .f-line-text, .f-line-input, .f-line-radio {
            padding-left: 0;
            border-bottom: 1PX solid #ccc;
            &:last-child {
                border-bottom: none;
            }
        }
    }
</style>