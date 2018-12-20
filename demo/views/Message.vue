<template>
    <div>
        <button class="btn btn-primary" @click="showAlert">这是一个alert</button>
        <button class="btn btn-primary" @click="showConfirm">这是一个confirm</button>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        data() {
            return {}
        },
        methods: {
            showAlert() {
                this.$alert('抱歉，开店失败。试用店铺一个手机最多只允许开设5家，请输入激活码开设正式店铺')
            },
            showConfirm() {
                this.$confirm("这是一个confirm")
            }
        },
        created() {
            
        }
    }
</script>
