<template>
    <div class="f-steps-wrap">
        <ul class="list">
            <li v-for="item,index in data"
                class="item"
                :style="styles"
                :class="{done:isDone(index),active:isActive(index)}"
                @click="handleClick(item,index)"
            >
                <p class="text">{{item}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FSteps",
        props: ['data', 'activeIndex'],
        computed: {
            styles() {
                let len = this.data.length
                return {
                    width: Math.floor(100 / (len - 1)) + '%'
                }
            }
        },
        methods: {
            isDone(index) {
                return index <= this.activeIndex
            },
            isActive(index) {
                return index === this.activeIndex
            },
            handleClick(item, index) {
                this.$emit('click', item, index)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .f-steps-wrap .list {
        height: 128px;
        background-color: #fff;
        padding: 40px 120px 30px;
        overflow: hidden;
        list-style: none;
        margin: 0;
        .item {
            position: relative;
            float: left;
            width: 50%;
            height: 1PX;
            border-top: 1PX solid #ccc;
            &:before {
                content: ' ';
                position: absolute;
                top: -10px;
                left: -10px;
                width: 24px;
                height: 24px;
                background: url("https://assets.2dfire.com/frontend/c1e57b2555aa53aadc1b684e2ce014f8.png") no-repeat;
                background-size: 20px 20px;
                z-index: 1;
            }
            &.done:before, &.active:before {
                background: url("https://assets.2dfire.com/frontend/2f5dfb1049352302305014e687c6ef8b.png") no-repeat;
                background-size: 20px 20px;
            }
            &.active .text {
                color: #0088FF;
            }
            &:last-child {
                width: 0 !important;
            }
            .text {
                position: absolute;
                top: 20px;
                left: 0;
                margin: 0;
                text-align: center;
                font-size: 26px;
                color: #333;
                transform: translate(-50%);
                white-space: nowrap;
            }
        }
    }
</style>
