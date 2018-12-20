<template>
    <f-view>
        <f-radio label="1" v-model="value" @change="handleChange">选项1</f-radio>
        <f-radio label="2" v-model="value" @change="handleChange">选项2</f-radio>
    </f-view>
</template>

<script>
    export default {
        name: 'RadioDemo',
        data() {
            return {
                value: "1"
            }
        },
        methods: {
            handleChange(val) {
                console.log(val)
            }
        }
    }
</script>
