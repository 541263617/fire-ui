#### dialog 弹出层

##### 基础用法
``` html
        <f-dialog
                :visible.sync="largeDialog"
                title="标题"
                size="large"
                @confirm="handleConfirm"
        >
            <p class="text">用简练的语言表达想法，多用标点符号。</p>
        </f-dialog>

```
``` javascript
export default{
    data(){
        return {
            largeDialog: false
        }
    }
}
```

##### API
 参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|--- |---
visible | 显示/隐藏 | Boolean | — | false
title | 标题 | String | — | ""
size | 尺寸 | String | normal/large | normal
confirmText | 确认按钮文本 | String | — | 确认
btnDisabled | 按钮禁用 | Boolean | — | false

##### Events 方法
 事件 | 说明 | 回调参数
---|---|---
close | 关闭事件 | —
confirm | 底部确认事件 | —

##### slots 插槽
 名称 | 说明
---|---
— | Dialog 的内容
header | 底部确认事件
footer | 底部重置事件