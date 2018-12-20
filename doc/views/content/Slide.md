#### slide 侧滑框

##### 基础用法
``` html
        <f-slide
                :visible.sync="defaultSlide"
                title="标题"
        >
            <p>123123132</p>
            <p>123123132</p>
            <p>123123132</p>
            <p>123123132</p>
            <p>123123132</p>
            <p>123123132</p>
        </f-slide>

        <f-slide
              :visible.sync="rightSlide"
              position="right"
              footer
              icon-text="分类"
        >
          <p>123123132123123132</p>
          <p>123123132123123132</p>
        </f-slide>

```
``` javascript
export default{
    data(){
        return {
            defaultSlide: false,
            rightSlide: false
        }
    }
}
```

##### API
 参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|--- |---
visible | 显示/隐藏 | Boolean | — | false
title | 标题 | String | — | ""
position | 位置 | String | bottom/right | bottom
footer | 底部 | Boolean | — | false
icon | 半圆icon | Boolean | — | false
iconText | 半圆文本值 | String | — | —

##### Events 方法
 事件 | 说明 | 回调参数
---|---|---
close | 关闭事件 | —
confirm | 底部确认事件 | —
reset | 底部重置事件 | —

##### slots 插槽
 名称 | 说明
---|---
— | Slide 的内容
header | 底部确认事件
footer | 底部重置事件