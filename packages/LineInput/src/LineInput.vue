<template>
    <div class="f-line-input" :class="{tip:hasTip,error:!!error}">
        <div class="inner">
            <label class="label">{{label}}</label>
            <div class="value">
                <input v-bind="$attrs"
                       :type="type||'text'"
                       :value="value"
                       :placeholder="_placeholder"
                       :required="_required"
                       @input="handleInput"
                       @blur="handleBlur"
                       @focus="handleFocus"
                >
            </div>
        </div>
        <p class="error" v-if="!!error">
            {{error}}
        </p>
        <p class="tip" v-else-if="hasTip">
            <slot name="tip">
                {{tip}}
            </slot>
        </p>
    </div>
</template>
<script>
    export default {
        name: 'FLineInput',
        props: ["label", "value", "type", "required", "placeholder", "tip", "error"],
        computed: {
            _required() {
                return this.required !== undefined ? true : false
            },
            _placeholder() {
                let placeholder = this.placeholder
                let _required = this._required
                return placeholder ? placeholder : (_required ? '必填' : '选填')
            },
            hasTip() {
                return !!this.tip || this.$slots.tip
            }
        },
        methods: {
            handleInput(e) {
                this.$emit('input', e.target.value)
            },
            handleBlur(e) {
                this.$emit('blur', e.target.value)
            },
            handleFocus(e){
                this.$emit('focus', e)
            }
        }
    };
</script>
<style lang="scss" scoped>
    .f-line-input {
        font-size: 30px;
        padding: 24px 30px;
        .inner {
            display: table;
            width: 100%;
            .label {
                display: table-cell;
                vertical-align: middle;
            }
            .value {
                display: table-cell;
                vertical-align: middle;
                text-align: right;
                input {
                    width: 100%;
                    color: #0088ff;
                    font-size: 30px;
                    text-align: right;
                    background: transparent;
                    &[required]::-webkit-input-placeholder {
                        color: #f03;
                    }
                    &::-webkit-input-placeholder {
                        color: #ccc;
                    }
                }
            }
        }
        &.tip, &.error {
            padding-bottom: 20px;
        }
        .tip, .error {
            font-size: 26px;
            color: #999;
            margin-top: 20px;
        }
        .error {
            color: #f03;
            padding-left: 44px;
            background: url("https://assets.2dfire.com/frontend/cbc50850f598b7abce231f2c6b1c26d7.png") no-repeat;
            background-size: 32px 32px;
            background-position: left center;
        }
    }
</style>

