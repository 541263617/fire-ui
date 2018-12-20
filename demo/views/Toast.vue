<template>
    <div>
        <button class="btn btn-primary" @click="showToast">这是一个toast</button>
    </div>
</template>

<script>
    export default {
        name: 'Toast',
        data() {
            return {}
        },
        methods: {
            showToast() {
                this.$toast("提示文字最多不超过两行3s消失")
            }
        }
    }
</script>
