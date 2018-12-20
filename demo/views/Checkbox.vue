<template>
    <div>
        <f-checkbox v-model="checked">A01(四人桌)</f-checkbox>

        <f-checkbox-group v-model="checkedList" @change="handleChange">
            <f-checkbox>1楼</f-checkbox>
            <f-checkbox>2楼</f-checkbox>
            <f-checkbox>3楼</f-checkbox>
            <f-checkbox>4楼</f-checkbox>
            <f-checkbox>5楼</f-checkbox>
            <f-checkbox>6楼</f-checkbox>
        </f-checkbox-group>

    </div>
</template>

<script>
    import FView from "../../packages/View/src/View";

    export default {
        components: {FView},
        name: 'FCheckboxDemo',
        data() {
            return {
                checked: false,
                checkedList: [0, 2]
            }
        },
        methods: {
            handleChange(val) {
                console.log(val)
            }
        }
    }
</script>
