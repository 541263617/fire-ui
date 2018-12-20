<template>
    <div class="f-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FCheckboxGroup",
        props: {
            value: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                checkedList: this.value
            }
        },
        computed: {},
        methods: {
            handleGroupChange(val, e) {
                let index = this.checkedList.indexOf(val)
                if (index > -1) {
                    this.checkedList.splice(index, 1)
                } else {
                    this.checkedList.push(val)
                }
                this.$emit('input', this.checkedList, e)
            }
        },
        mounted() {
            let children = this.$children
            this.len = children.length
            children.map((item, index) => {
                item.index = index
            })
        },
        watch: {
            value(val) {
                this.checkedList = val
                this.$emit('change', val)
            }
        }
    }
</script>
