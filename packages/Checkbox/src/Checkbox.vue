<template>
    <div class="f-checkbox">
        <div class="inner" @click="handleClick">
            <i class="f-icon" :class="{checked:checked}"></i>
            <p class="text">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FCheckbox',
        props: {
            value: {
                type: Boolean,
                default() {
                    return false
                }
            },
            label: {
                type: [String, Number],
                default() {
                    return 0
                }
            }
        }, data() {
            return {
                index: 0
            }
        },
        computed: {
            isGroup() {
                return this.$parent.$options._componentTag === 'f-checkbox-group'
            },
            checked() {
                if (this.isGroup) {
                    let parent = this.$parent
                    return parent.checkedList.indexOf(this.label || this.index) > -1
                } else {
                    return this.value
                }
            }
        },
        methods: {
            handleClick(e) {
                if (this.isGroup) {
                    this.$parent.handleGroupChange(this.label || this.index, e)
                } else {
                    this.$emit('input', !this.value)
                }
            }
        },
        watch: {
            value(val) {
                this.$emit('change', val)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .f-checkbox {
        font-size: 30px;
        padding: 24px 30px;
        .inner {
            display: table;
            width: 100%;
            .f-icon {
                display: table-cell;
                vertical-align: middle;
                width: 40px;
                height: 40px;
                background: url("https://assets.2dfire.com/frontend/f33b5185c0b936289aa4e05cfa2bcb4a.png") no-repeat;
                background-size: 100%;
                &.checked {
                    background: url("https://assets.2dfire.com/frontend/9fdf1d94d0ea8feeea0d713098cb4a21.png") no-repeat;
                    background-size: 100%;
                }
            }
            .text {
                display: table-cell;
                padding-left: 30px;
            }
        }
    }
</style>
