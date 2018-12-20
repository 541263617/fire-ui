<template>
    <div>
        <f-checkbox-button v-model="checkButton" @change="handleChange">多选按钮</f-checkbox-button>

        <f-checkbox-group v-model="checkedList" @change="handleChange">
            <f-checkbox-button>1楼</f-checkbox-button>
            <f-checkbox-button>2楼</f-checkbox-button>
            <f-checkbox-button>3楼</f-checkbox-button>
            <f-checkbox-button>4楼</f-checkbox-button>
            <f-checkbox-button>5楼</f-checkbox-button>
            <f-checkbox-button>6楼</f-checkbox-button>
        </f-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: 'FCheckboxButtonDemo',
        data() {
            return {
                checkButton: true,
                checkedList: [0, 1]
            }
        },
        methods: {
            handleChange(val) {
                console.log(val)
            }
        }
    }
</script>
