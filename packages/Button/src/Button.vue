<template>
    <div :class="rootClass" @click="handleClick">
        <i :class="iconClass" v-show="!!this.icon"></i>
        <label class="text">
            <slot></slot>
        </label>
    </div>
</template>

<script>
    export default {
        name: "FButton",
        props: {
            type: {
                type: String,
                default() {
                    return ''
                }
            },
            icon: {
                type: String,
                default() {
                    return ''
                }
            },
            size: {
                type: String,
                default() {
                    return 'long'
                }
            },
            disabled: {
                type: Boolean,
                default() {
                    return false
                }
            },
            hollow: {
                type: Boolean,
                default() {
                    return false
                }
            },
            text: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        computed: {
            rootClass() {
                return [
                    'f-button',
                    this.type ? `btn-${this.type}` : "",
                    this.size ? `btn-${this.size}` : "",
                    {
                        'is-hollow': this.hollow,
                        'is-text': this.text,
                        'is-disabled': this.disabled,
                        'is-circle': this.icon,
                    }
                ]
            },
            iconClass() {
                return [
                    this.icon ? `f-icon f-icon-${this.icon}` : "",
                ]
            }
        },
        methods: {
            handleClick() {
                if (this.disabled) {
                    return
                }
                this.$emit('click')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .f-button {
        position: relative;
        padding: 0;
        border: none;
        background-color: transparent;
        text-align: center;
        outline: none;
        &.btn-long {
            display: block;
            width: 600px;
            height: 88px;
            line-height: 88px;
            margin: 0 auto;
            border-radius: 12px;
            font-size: 30px;
            &.is-hollow {
                line-height: 86px;
            }
        }
        &.btn-short {
            display: inline-block;
            width: 164px;
            height: 60px;
            line-height: 60px;
            border-radius: 8px;
            font-size: 26px;
            &.is-hollow {
                line-height: 58px;
            }
        }
        &.btn-primary {
            color: #fff;
            background-color: #0088ff;
            &.is-hollow {
                color: #08f;
                border: 1PX solid #08f;
                background-color: transparent;
            }
            &.is-text {
                color: #08f;
            }
        }
        &.btn-danger {
            color: #fff;
            background-color: #f03;
            &.is-hollow {
                color: #f03;
                border: 1PX solid #f03;
                background-color: transparent;
            }
            &.is-text {
                color: #f03;
            }
        }
        &.is-text {
            display: inline-block;
            width: initial;
            height: initial;
            line-height: initial;
            font-size: 30px;
            border: none;
            border-radius: 0;
            background-color: transparent;
        }
        &.is-text.is-disabled {
            color: #ccc;
            background-color: transparent;
        }
        &.is-disabled {
            color: #fff;
            background-color: #ccc;
        }
        &.is-hollow.is-disabled {
            color: #ccc;
            border: 1PX solid #ccc;
            background-color: transparent;
        }
        &.is-circle {
            display: inline-block;
            width: 112px;
            height: 112px;
            border-radius: 50%;
            .f-icon {
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
            }
            .text {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                line-height: initial;
                font-size: 20px;
                white-space: nowrap;
            }
        }
    }

    .f-icon {
        display: inline-block;
        width: 48px;
        height: 48px;
        background-color: transparent;
    }

    .f-icon-add {
        background: url("https://assets.2dfire.com/frontend/731a909bf931a5808de86c1aab229deb.png") no-repeat;
        background-size: 100%;
    }

    .f-icon-ok {
        background: url("https://assets.2dfire.com/frontend/cb8e3bf2a026c1b819cfea66b0284fb5.png") no-repeat;
        background-size: 100%;
    }

    .f-icon-circle {
        background: url("https://assets.2dfire.com/frontend/03ff1d6270aa9619e18ba08b89f36f76.png") no-repeat;
        background-size: 100%;
    }

    .f-icon-batch {
        background: url("https://assets.2dfire.com/frontend/8e3045861d734853e9eee2fc651aa94b.png") no-repeat;
        background-size: 100%;
    }

    .f-icon-sort {
        background: url("https://assets.2dfire.com/frontend/121cc5615a4328b615524f94da2dd2cf.png") no-repeat;
        background-size: 100%;
    }


</style>