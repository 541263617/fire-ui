<template>
    <div>
        <f-steps :data="stepData" :activeIndex="activeIndex" @click="handleClick"></f-steps>
    </div>
</template>

<script>
    export default {
        name: 'StepsDemo',
        data() {
            return {
                stepData: ['申请贷款', "常用联系人", "短信验证码"],
                activeIndex: 1
            }
        },
        methods: {
            handleClick(item, index) {
                console.log(item, index)
            }
        }
    }
</script>
