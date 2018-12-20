<template>
    <div class="f-slide-wrap">
        <f-mask :visible="visible" @close="handleClose"></f-mask>
        <div class="slide-con" :class="[position,{'visible':visible}]">
            <div class="half-circle" v-if="!!iconText&&position==='right'" @click="toggleVisible">
                <i class="f-icon-circle"></i>
                <p class="text">{{iconText}}</p>
            </div>
            <div class="slide-inner">
                <slot name="header">
                    <div class="header" v-show="title">
                        <p class="title">{{title}}</p>
                        <i class="f-icon-close" @click="handleClose"></i>
                    </div>
                </slot>
                <div class="content" :class="{'has-footer':footer}">
                    <slot>
                    </slot>
                </div>
                <slot name="footer">
                    <div class="footer" v-show="footer">
                        <button class="reset" @click="handleReset">重置</button>
                        <button class="confirm" @click="handleConfirm">确认</button>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
  import FMask from '../../Mask/index'

  export default {
    name: 'FSlide',
    components: {
      FMask
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
      position: {
        type: String,
        default() {
          return 'bottom'
        }
      },
      footer: {
        type: Boolean,
        default() {
          return false
        }
      },
      iconText: {
        type: String,
        default() {
          return ''
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      toggleVisible() {
        this.$emit('update:visible', !this.visible)
        if (this.visible) {
          this.$emit('close')
        }
      },
      handleClose() {
        this.$emit('update:visible', false)
        this.$emit('close')
      },
      handleReset() {
        this.$emit('reset')
      },
      handleConfirm() {
        this.$emit('confirm')
      }
    }
  }
</script>
<style lang="scss" scoped>
    @import "../../../src/animations";

    .f-slide-wrap {
        .slide-con {
            position: fixed;
            font-size: 30px;
            color: #333;
            z-index: 1001;
            @include animation;
            &.right {
                top: 0;
                bottom: 0;
                right: 0;
                transform: translateX(100%);
                &.visible {
                    transform: translateX(0);
                }
            }
            &.bottom {
                bottom: 0;
                left: 0;
                width: 100%;
                transform: translateY(100%);
                &.visible {
                    transform: translateY(0);
                }
            }
            .slide-inner {
                height: 100%;
                background-color: #fff;
                overflow: hidden;
            }
            .half-circle {
                position: fixed;
                left: -88px;
                top: 50%;
                width: 140px;
                height: 140px;
                border-radius: 50%;
                transform: translateY(-50%);
                background-color: #0088ff;
                z-index: -1;
                .f-icon-circle {
                    display: block;
                    width: 48px;
                    height: 48px;
                    margin-top: 30px;
                    margin-left: 28px;
                    background: url("https://assets.2dfire.com/frontend/953fa2d81e2ab113841622b2fdf0edf4.png") no-repeat;
                    background-size: 100%;
                }
                .text {
                    font-size: 22px;
                    color: #fff;
                    padding-top: 4px;
                    padding-left: 30px;
                }
            }
            .header {
                position: relative;
                text-align: center;
                height: 88px;
                line-height: 88px;
                font-weight: bold;
                border-bottom: 1PX solid #ccc;
                .f-icon-close {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 84px;
                    height: 88px;
                    background: url("https://assets.2dfire.com/frontend/e37aa2b9ad645208b707fbce7c740745.png") no-repeat;
                    background-size: 24px 24px;
                    background-position: center;
                }
            }
            .content {
                height: 100%;
                overflow: auto;
                &.has-footer {
                    padding-bottom: 88px;
                }
            }
            .footer {
                position: absolute;
                width: 100%;
                bottom: 0;
                overflow: hidden;
                button {
                    float: left;
                    font-size: 26px;
                    display: inline-block;
                    width: 50%;
                    height: 88px;
                    line-height: 88px;
                    padding: 0;
                    border: none;
                    background-color: transparent;
                    text-align: center;
                    outline: none;
                }
                .reset {
                    background-color: #ddd;
                    color: #333;
                }
                .confirm {
                    background-color: #08f;
                    color: #fff;
                }
            }
        }
    }
</style>
