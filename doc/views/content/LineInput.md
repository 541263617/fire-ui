#### LineInput 输入框

##### 基础用法
``` html
        <f-line-input label="支付金额" v-model="empty" required></f-line-input>
        <f-line-input label="支付金额" v-model="empty"></f-line-input>
        <f-line-input label="支付金额" v-model="empty" placeholder="金额保留2位有效数字"></f-line-input>
        <f-line-input label="本月销售金额（元）"
                      v-model="amount"
                      tip="销售金额最多保留两位小数，例如：30,000.00。"
                      required
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
```
``` javascript
export default{
    data(){
        return {
        }
    }
}
```

##### API
 参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|--- |---
label | 左边文本值 | String | — | ''
type | 类型 | String | 原生type属性 | text
required | 是否必填 | Boolean | — | false
placeholder | 备注 | String | 原生placeholder属性 | ''
tip | 提示信息 | String | — | ''
error | 错误信息 | String | — | ''

##### Events 方法
 事件 | 说明 | 回调参数
---|---|---
blur | 在 Input 失去焦点时触发 | 改变后的value值

##### slots 插槽
 名称 | 说明
---|---
tip | 提示内容
