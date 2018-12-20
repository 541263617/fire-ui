<template>
    <f-view>
        <f-line-input label="月销售笔数（笔）" v-model="amount" required></f-line-input>
        <f-line-input label="本月销售金额（元）" v-model="amount" required tip="销售金额最多保留两位小数，例如：30,000.00。"></f-line-input>
        <f-line-input label="费率" v-model="amount" required></f-line-input>
        <f-line-text icon>
            <div slot="label">
                <p>销售笔数：560笔</p>
                <p>销售金额：56,800.00元</p>
            </div>
            <div slot="text">
                <p>未上报</p>
            </div>
        </f-line-text>
        <f-line-text label="本月销售金额（元）" text="11234.00" icon tip="销售金额最多保留两位小数，例如：30,000.00。"></f-line-text>
    </f-view>
</template>

<script>
    export default {
        name: 'FViewDemo',
        data() {
            return {
                amount: ''
            }
        }
    }
</script>