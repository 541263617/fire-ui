<template>
    <div class="f-checkbox-button" :class="{checked:checked}" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FCheckboxButton",
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
        },
        data() {
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
    .f-checkbox-button {
        display: inline-block;
        width: 200px;
        height: 76px;
        line-height: 76px;
        text-align: center;
        border: 1PX solid #ccc;
        border-radius: 8px;
        background: #fff;
        color: #333;
        font-size: 26px;
        &.checked {
            border: none;
            color: #0088ff;
            background: #fff url("https://assets.2dfire.com/frontend/beeaf5bf42d55045d19b9203b0f35e63.png") no-repeat;
            background-size: 100%;
        }
    }
</style>