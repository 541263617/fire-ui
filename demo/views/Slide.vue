<template>
    <div>
        <f-button class="btn btn-primary" @click="showRightSlide">右边侧滑层</f-button>
        <f-slide
                :visible.sync="rightSlide"
                position="right"
                footer
                icon-text="分类"
        >
            <p>12312313212312313254646545456465</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
            <p>123123132123123132</p>
        </f-slide>

        <f-button class="btn btn-primary" @click="showDefaultSlide">下面侧滑层</f-button>
        <f-slide
                :visible.sync="defaultSlide"
                title="标题"
        >
            <p>123123132</p>
            <p>123123132</p>
            <p>123123132</p>
            <p>123123132</p>
            <p>123123132</p>
            <p>123123132</p>
        </f-slide>
    </div>
</template>

<script>
    export default {
        name: 'SlideDemo',
        data() {
            return {
                defaultSlide: false,
                rightSlide: false
            }
        },
        methods: {
            showDefaultSlide() {
                this.defaultSlide = true
            },
            showRightSlide() {
                this.rightSlide = true
            }
        }
    }
</script>
