<template>
    <label class="f-line-radio">
        <p class="radio-label" :class="{'checked':model===label}">
            <slot></slot>
        </p>
        <input class="radio-value"
               type="radio"
               :name="name"
               :value="label"
               v-model="model"
               @change="handleChange">
    </label>
</template>

<script>
    export default {
        name: "FRadio",
        props: {
            label: [Number, String, Boolean],
            value: [Number, String, Boolean],
            name: {
                type: String,
                default() {
                    return 'radio'
                }
            }
        },
        computed: {
            model:{
                get(){
                    return this.value
                },
                set(val){
                    this.$emit('input', val);
                }
            }
        },
        methods: {
            handleChange() {
                this.$nextTick(() => {
                    this.$emit('change', this.label)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .f-line-radio {
        display: block;
        position: relative;
        padding: 24px 30px;
        font-size: 30px;
        .radio-label {
            padding-right: 60px;
            word-break: break-all;
            font-size: inherit;
            line-height: initial;
            &.checked {
                background: url("https://assets.2dfire.com/frontend/968849d2fd3777820124b0bc6d1b5834.png") no-repeat;
                background-size: 26px 20px;
                background-position: right center;
            }
        }
        .radio-value {
            display: none;
            width: 0;
            height: 0;
        }
    }
</style>