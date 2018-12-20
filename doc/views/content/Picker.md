#### Picker 滚动控件（默认为日期控件）

##### 基础用法
``` html
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
```
``` javascript
export default{
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
          customData: [
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
  }
}
```

##### API
 参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|--- |---
data | 自定义数据 | Array | — | —
type | 类型 | String | date/month/year | date
visible | 显示/隐藏 | Boolean | — | false
textConfirm | 确认按钮文本 | String | — | 确认
textCancel | 取消按钮文本 | String | — | 取消
textTitle | 标题 | String | — | 标题
minDate | 开始日期，自定义data无效 | Number | — | 当前年份-5的1月1号
maxDate | 结束日期，自定义data无效 | Number | — | 当前日期
unit | 单位，自定义data无效 | Boolean | — | true
polyfill | 补零，自定义data无效 | Boolean | — | false
code | code别名 | String | — | code
name | name别名 | String | — | name

##### Events 方法
 事件 | 说明 | 回调参数
---|---|---
confirm | 确认事件 | 选中值列表
cancel | 取消事件 | —