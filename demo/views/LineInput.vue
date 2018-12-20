<template>
    <f-view>
        <f-line-input label="支付金额" v-model="empty" required></f-line-input>
        <f-line-input label="支付金额" v-model="empty"></f-line-input>
        <f-line-input label="支付金额" v-model="empty" placeholder="金额保留2位有效数字"></f-line-input>
        <f-line-input label="本月销售金额（元）"
                      v-model="amount"
                      tip="销售金额最多保留两位小数，例如：30,000.00。"
                      required
                      @focus="handleFocus"
        >
        </f-line-input>
        <f-line-input
                label="本月销售金额（元）"
                v-model="amount"
                tip="销售金额最多保留两位小数，例如：30,000.00。"
                error="金额不许大于0"
                required
        >
        </f-line-input>
        <f-line-input label="自定义提示文案"
                      v-model="amount"
                      required
        >
            <p slot="tip">
                6-20位字母、数字组合。<span style="color: #0088ff">忘记密码</span>
            </p>
        </f-line-input>
    </f-view>
</template>

<script>

    import FView from "../../packages/View/src/View";

    export default {
        components: {FView},
        name: 'LineInputDemo',
        data() {
            return {
                empty: '',
                amount: 0,
            }
        },
        methods:{
            handleFocus(e){
                console.log(e)
            }
        }
    }
</script>
