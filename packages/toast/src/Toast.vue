<template>
    <transition name="fade-in">
        <div class="toast" v-if="visible">
            <div class="content">{{content}}</div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Toast",
        props: {
            content: {
                type: [String, Number],
                default: ''
            },
            duration: {
                type: Number,
                default: 3000,
            }
        },
        data() {
            return {
                timeout: '',
                visible: false,
            }
        },
        methods: {
            close() {
                this.visible = false
                this.clear()
            },
            clear() {
                clearTimeout(this.timeout)
                this.timeout = ''
            }
        },
        watch: {
            visible(val) {
                if (val) {
                    if (this.timeout) this.clear()
                    this.timeout = setTimeout(() => {
                        this.close()
                    }, this.duration)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 360px;
        padding: 44px 20px;
        border-radius: 26px;
        font-size: 30px;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, .7);
        color: #fff;
        text-align: center;
        z-index: 1100;
        box-sizing: border-box;
    }
</style>
