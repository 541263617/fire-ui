<template>
    <f-view>
        <f-line-text label="销售金额" text="59,000.00"></f-line-text>
        <f-line-text label="销售金额" text="59,000.00" icon></f-line-text>
        <f-line-text label="销售金额" icon></f-line-text>
        <f-line-text label="选择框" text="份" select></f-line-text>
        <f-line-text label="默认placeholder" :text="value1" select></f-line-text>
        <f-line-text label="自定义placeholder" :text="value1" placeholder="选填" select></f-line-text>
        <f-line-text label="必选状态" :text="value1" select required></f-line-text>
        <f-line-text icon>
            <div slot="label">
                <p>销售笔数：560笔</p>
                <p>销售金额：56,800.00元</p>
            </div>
            <div slot="text">
                <p>未上报</p>
            </div>
        </f-line-text>
        <f-line-text label="本月销售金额（元）" text="59,000.00" tip="销售金额最多保留两位小数，例如：30,000.00。"></f-line-text>
        <f-line-text label="本月销售金额（元）" text="59,000.00">
            <p slot="tip">
                这是tip的具名插槽。<span style="color: #0088ff">蓝色字体</span>
            </p>
        </f-line-text>
    </f-view>
</template>

<script>
    export default {
        name: 'LineTextDemo',
        data() {
            return {
                text: 5000.00,
                value: 0,
                value1: ''
            }
        }
    }
</script>
