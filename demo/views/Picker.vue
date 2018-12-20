<template>
    <div>
        <f-button class="btn btn-primary" @click="showDatePicker">时间控件</f-button>
        <f-picker
                v-model="datePicker.value"
                :visible.sync="datePicker.visible"
                @confirm="pickerConfirm"
        >
        </f-picker>
        <f-button class="btn btn-primary" @click="showCustomPicker">自定义控件</f-button>
        <f-picker
                :data="customData"
                v-model="customPicker.value"
                :visible.sync="customPicker.visible"
                @confirm="pickerConfirm"
        >
        </f-picker>
    </div>
</template>

<script>
    export default {
        name: 'FPickerDemo',
        data() {
            return {
                datePicker: {
                    visible: false,
                    value: new Date('2016-10-26').getTime()
                },
                customPicker: {
                    visible: false,
                    value: ['2', '2-3']
                },
                customData: []
            }
        },
        methods: {
            showDatePicker() {
                this.datePicker.visible = true
            },
            showCustomPicker() {
                this.customPicker.visible = true
            },
            pickerConfirm(val) {
                console.log(val)
            }
        },
        created() {
            setTimeout(() => {
                this.customData = [
                    {
                        code: "1",
                        name: "中餐",
                        children: [
                            {
                                code: "1-1",
                                name: "烧烤"
                            }, {
                                code: "1-2",
                                name: "火锅"
                            }, {
                                code: "1-3",
                                name: "江浙菜"
                            }, {
                                code: "1-4",
                                name: "粤菜"
                            }, {
                                code: "1-5",
                                name: "川菜"
                            }
                        ]
                    },
                    {
                        code: "2",
                        name: "西餐",
                        children: [
                            {
                                code: "2-1",
                                name: "鹅肝"
                            }, {
                                code: "2-2",
                                name: "甜品"
                            }, {
                                code: "2-3",
                                name: "牛排"
                            }
                        ]
                    }
                ]
            }, 2000)
        }
    }
</script>
