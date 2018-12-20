<template>
    <div class="f-dialog-wrap">
        <f-mask :visible="visible" @close="handleClose"></f-mask>
        <transition name="fade-in">
            <div class="dialog-inner" :class="size" v-show="visible">
                <slot name="header">
                    <div class="header">
                        <div class="title">
                            <p>{{title}}</p>
                            <i class="icon" @click="handleClose"></i>
                        </div>
                    </div>
                </slot>
                <div class="content">
                    <slot>
                    </slot>
                </div>
                <slot name="footer">
                    <div class="footer">
                        <f-button type="primary" @click="handleConfirm" :disabled="btnDisabled">{{confirmText}}</f-button>
                    </div>
                </slot>
            </div>
        </transition>
    </div>
</template>

<script>
    import FMask from '../../Mask/index'
    import FButton from '../../Button/index'

    export default {
        name: 'FDialog',
        components: {
            FMask,
            FButton
        },
        props: {
            visible: {
                type: Boolean,
                default() {
                    return false
                }
            },
            title: {
                type: String,
                default() {
                    return ""
                }
            },
            size: {
                type: String,
                default() {
                    return 'normal'
                }
            },
            confirmText: {
                type: String,
                default() {
                    return '确认'
                }
            },
            btnDisabled: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            handleClose() {
                this.$emit('close')
                this.$emit('update:visible', false)
            },
            handleConfirm() {
                this.$emit('confirm')
            }
        }
    }
</script>
<style lang="scss" scoped>
    .dialog-inner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0 30px;
        background-color: #fff;
        border-radius: 26px;
        font-size: 30px;
        z-index: 1001;
        &.normal {
            width: 540px;
            .f-button {
                width: 480px;
            }
        }
        &.large {
            width: 690px;
        }
        .header {
            margin-top: 50px;
            margin-bottom: 30px;
            text-align: center;
            .title {
                font-weight: bold;
            }
            .icon {
                position: absolute;
                top: 18px;
                right: 18px;
                width: 48px;
                height: 48px;
                background: url("https://assets.2dfire.com/frontend/e287eb62d761f95b9ca993b1be66d9e9.png") no-repeat;
                background-size: 24px 24px;
                background-position: center;
            }
        }
        .footer {
            margin-bottom: 40px;
        }
    }
</style>
