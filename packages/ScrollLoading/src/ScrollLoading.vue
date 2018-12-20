<template>
    <div class="scroll-wrap">
        <div class="page-list" v-show="pageList.length">
            <slot>
            </slot>
        </div>
        <infinite-loading v-bind="$attrs" @infinite="beforeLoadHandler" ref="infiniteLoading" spinner="spiral">
            <div class="no-more" slot='no-more'>
                <slot name="no-more">
                    {{noMoreText}}
                </slot>
            </div>
            <div class="no-results" slot='no-results'>
                <slot name="no-results">
                    {{noResultText}}
                </slot>
            </div>
        </infinite-loading>
    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        name: "FScrollLoading",
        components: {
            InfiniteLoading
        },
        props: {
            pageList: {
                type: Array,
                default() {
                    return []
                }
            },
            beforeLoad: {
                type: Function
            },
            pageLoad: {
                type: Function
            },
            query: {
                type: Object,
                default() {
                    return {}
                }
            },
            noMoreText: {
                type: String,
                default() {
                    return "已经加载完全部数据"
                }
            },
            noResultText: {
                type: String,
                default() {
                    return "暂无数据"
                }
            },
            pageSize: {
                type: Number,
                default() {
                    return 10
                }
            },
            saveQuery: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        data() {
            return {
                pageConfig: {
                    pageIndex: 1,
                    pageSize: this.pageSize
                }
            }
        },
        methods: {
            beforeLoadHandler($state) {
                if (this.beforeLoad && typeof this.beforeLoad === 'function') {
                    if (this.beforeLoad()) {
                        this.infiniteHandler($state)
                    } else {
                        $state.complete()
                    }
                } else {
                    this.infiniteHandler($state)
                }
            },
            infiniteHandler($state) {
                if (this.saveQuery) {
                    this.$router.replace({path, query: this.query})
                }
                if (this.pageLoad && typeof this.pageLoad === 'function') {
                    this.pageLoad({
                        ...this.query,
                        ...this.pageConfig
                    }).then(data => {
                        this.$emit("update:pageList", this.pageList.concat(data))
                        let len = data.length
                        if (len > 0) {
                            this.pageConfig.pageIndex++
                            $state.loaded()
                        } else {
                            $state.complete()
                        }
                    })
                }
            }
        },
        watch: {
            query: {
                handler(val) {
                    this.pageConfig.pageIndex = 1
                    this.$emit("update:query", val)
                    this.$emit("update:pageList", [])
                    this.$refs.infiniteLoading.stateChanger.reset()
                },
                deep: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .no-more {
        position: relative;
        text-align: center;
        font-size: 28px;
        color: #999;
        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 21%;
            width: 48px;
            height: 1PX;
            background-color: #ccc;
        }
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            right: 21%;
            width: 48px;
            height: 1PX;
            background-color: #ccc;
        }
    }

    .no-results {
        font-size: 30px;
        color: #333;
    }
</style>