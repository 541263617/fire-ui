#### Button 按钮

##### 基础用法
``` html
<f-button type="primary">主要按钮</f-button>
<f-button type="danger">危险按钮</f-button>
<f-button type="danger" disabled>禁用按钮</f-button>
<f-button type="primary" hollow>主要按钮</f-button>
<f-button type="danger" hollow>危险按钮</f-button>
<f-button type="danger" hollow disabled>禁用按钮</f-button>
<f-button type="primary" size="short">短按钮</f-button>
<f-button type="primary" size="short" hollow>主要按钮</f-button>
<f-button type="primary" text>文字按钮</f-button>
<f-button type="danger" text>文字按钮</f-button>
<f-button type="primary" text disabled>禁用按钮</f-button>
<f-button type="danger" icon="add">添加分类</f-button>
<f-button type="danger" icon="ok">全选</f-button>
<f-button type="danger" icon="circle">全不选</f-button>
<f-button type="danger" icon="batch">批量</f-button>
<f-button type="danger" icon="sort">排序</f-button>
```

##### API
 参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 类型 | String | default/primary/danger/reset | default
icon | 图标 | String | add/ok/circle/batch/sort | —
size | 尺寸 | String | long/short | long
hollow | 是否空心 | Boolean | — | false
text | 是否文字按钮 | Boolean | — | false
disabled | 是否禁用 | Boolean | — | false

##### Events 方法
 事件 | 说明 | 回调参数
---|---|---
click | 点击事件 | —
