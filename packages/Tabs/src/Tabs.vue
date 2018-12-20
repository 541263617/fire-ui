<template>
    <div class="f-tabs-wrap">
        <div class="tab-active-bar" :style="activeStyle"></div>
        <slot></slot>
    </div>
</template>

<script>
    const dpr = parseFloat(document.documentElement.getAttribute('data-dpr') || 1)
    const clientWidth = document.documentElement.getBoundingClientRect().width

    export default {
        name: "FTabs",
        props: ["value"],
        data() {
            return {
                translateX: 0,
                len: 0,
                activeTab: this.value || 0
            }
        },
        methods: {
            tabClick(name, e) {
                this.translateX = e.target.offsetLeft
                this.activeTab = name
                this.$emit('input', name)
                this.$emit('click', name, e)
            }
        },
        computed: {
            activeStyle() {
                let width = (clientWidth - 15 * dpr * 2 * this.len) / this.len
                return {
                    transform: `translateX(${this.translateX}px)`,
                    width: width + 'px'
                }
            }
        },
        mounted() {
            let children = this.$children
            this.len = children.length
            children.map((item, index) => {
                item.index = index
                if (this.activeTab === (item.name || index)) {
                    this.$nextTick(() => {
                        this.translateX = item.$el.offsetLeft
                    })
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .f-tabs-wrap {
        position: relative;
        background-color: #fff;
        overflow: hidden;
        .tab-active-bar {
            content: ' ';
            position: absolute;
            left: 30px;
            width: 100%;
            bottom: 0;
            height: 4px;
            background-color: #0088ff;
            transition: all 0.3s ease-in-out;
        }
    }
</style>