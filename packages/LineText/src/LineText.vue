<template>
    <div class="f-line-text" :class="rootClass" @click="handleClick">
        <div class="inner" :class="{'f-icon-right':icon||select}">
            <div class="label">
                <slot name="label">
                    {{label}}
                </slot>
            </div>
            <div class="text" :class="{'is-select':select}">
                <slot name="text">
                    <p v-if="text||text===0">{{text}}</p>
                    <p class="placeholder" :class="{'is-required':this.required}" v-else-if="select">{{_placeholder}}</p>
                </slot>
            </div>
        </div>
        <div class="tip" v-show="hasTip">
            <slot name="tip">
                {{tip}}
            </slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "FLineText",
    props: {
      label: String,
      text: [String, Number],
      icon: {
        type: Boolean,
        default() {
          return false
        }
      },
      select: {
        type: Boolean,
        default() {
          return false
        }
      },
      tip: {
        type: String,
        default() {
          return ''
        }
      },
      required: {
        type: Boolean,
        default() {
          return false
        }
      },
      placeholder: {
        type: String,
        default() {
          return ''
        }
      }
    },
    computed: {
      rootClass() {
        return {
          'tip': !!this.tip
        }
      },
      _placeholder() {
        if (this.select) {
          return this.placeholder || (this.required ? "必选" : "请选择")
        } else {
          return ''
        }
      },
      hasTip() {
        return !!this.tip || this.$slots.tip
      }
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
    .f-line-text {
        font-size: 30px;
        padding: 24px 30px;
        &.tip {
            padding-bottom: 20px;
        }
        .inner {
            display: table;
            width: 100%;
            .label {
                display: table-cell;
                vertical-align: middle;
                white-space: nowrap;
                color: #333;
            }
            .text {
                display: table-cell;
                vertical-align: middle;
                text-align: right;
                word-break: break-all;
                color: #666;
                &.is-select {
                    color: #0088ff;
                    & .placeholder {
                        color: #ccc;
                        &.is-required {
                            color: #f03;
                        }
                    }
                }
            }
            &.f-icon-right {
                padding-right: 36px;
                background: url("https://assets.2dfire.com/frontend/759c714c40dc8148635fbea359ab2e63.png") no-repeat;
                background-position: right center;
                background-size: 16px 26px;
            }
        }
        .tip {
            font-size: 26px;
            color: #999;
            margin-top: 20px;
        }

    }
</style>