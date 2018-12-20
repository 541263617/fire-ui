#### CheckBox 多选框

##### 基础用法
``` html
       <f-checkbox-button v-model="checkButton" @change="handleChange">多选按钮</f-checkbox-button>

       <f-checkbox-group v-model="checkedList" @change="handleChange">
          <f-checkbox-button>1楼</f-checkbox-button>
          <f-checkbox-button>2楼</f-checkbox-button>
          <f-checkbox-button>3楼</f-checkbox-button>
          <f-checkbox-button>4楼</f-checkbox-button>
          <f-checkbox-button>5楼</f-checkbox-button>
          <f-checkbox-button>6楼</f-checkbox-button>
      </f-checkbox-group>
```
``` javascript
export default{
  data(){
    return {
        checkButton: true,
        checkedList: [0, 1]
    },
    methods:{
        handleChange(val){
            console.log(val)
        }
    }
  }
}
```

##### API
 参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|--- |---
label | 选中状态的值(checkbox-group有效) | String/Number | — | —

##### Events 方法
 事件 | 说明 | 回调参数
---|---|---
change | 改变事件 | 选中值
