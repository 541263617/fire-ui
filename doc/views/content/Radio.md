#### Radio 单选框

##### 基础用法
``` html
        <f-view>
            <f-radio label="1" v-model="value" @change="handleChange">选项1</f-radio>
            <f-radio label="2" v-model="value" @change="handleChange">选项2</f-radio>
        </f-view>
```
``` javascript
export default{
    data(){
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
```

##### API
 参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|--- |---
label | Radio的value | Number/String/Boolean | — | —
name | 原生 name 属性 | String | — | 'radio'

##### Events 方法
 事件 | 说明 | 回调参数
---|---|---
change | 绑定值变化时触发的事件 | 选中的 Radio label 值

