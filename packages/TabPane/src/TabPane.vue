<template>
    <div class="f-tab-pane" :class="{'active':active}" :style="styles" @click="handleClick">
        {{label}}
    </div>
</template>

<script>
    export default {
        name: "FTabPane",
        props: {
            label: {
                type: String,
                default() {
                    return ''
                }
            },
            name: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        data() {
            return {
                index: 0,
            }
        },
        methods: {
            handleClick(e) {
                this.$parent.tabClick(this.name || this.index, e)
            }
        },
        computed: {
            active() {
                return this.$parent.activeTab === (this.name || this.index)
            },
            styles() {
                return {
                    width: 100 / this.$parent.len + '%'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .f-tab-pane {
        position: relative;
        float: left;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        text-align: center;
        &.active {
            color: #0088ff;
        }
    }
</style>