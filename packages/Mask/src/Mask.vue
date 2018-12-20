<template>
    <transition name="fade-in">
        <div class="f-mask" ref="mask" v-show="visible" @click.self="handleClose"></div>
    </transition>
</template>

<script>
    export default {
        name: "FMask",
        props: {
            visible: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        methods: {
            handleClose() {
                this.$emit('close', false)
                this.$emit('update:visible', false);
            },
            touchMove(e) {
                e.preventDefault && e.preventDefault();
                e.returnValue = false;
                e.stopPropagation && e.stopPropagation();
                return false;
            },
            getRootEl() {
                return document.getElementsByClassName('router-view')[0]
            },
            addListener() {
                const el = this.getRootEl()
                const elMask = this.$refs.mask
                el && el.setAttribute('style', 'overflow:hidden')
                elMask && elMask.addEventListener('touchmove', this.touchMove)
            },
            removeListener() {
                const el = this.getRootEl()
                const elMask = this.$refs.mask
                el && el.setAttribute('style', 'overflow:auto')
                elMask && elMask.removeEventListener('touchmove', this.touchMove)
            },
            handleListener() {
                this.visible ? this.addListener() : this.removeListener()
            }
        },
        mounted() {
            this.handleListener()
        },
        watch: {
            visible() {
                this.handleListener()
            }
        },
        beforeDestroy() {
            this.removeListener()
        }
    }
</script>

<style scoped>
    .f-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .5);
        z-index: 1000;
    }
</style>
