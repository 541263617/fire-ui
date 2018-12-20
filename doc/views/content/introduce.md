#### 使用指南

##### 安装
``` javascript
// 非脚手架项目
npm install @2dfire/fire-ui -d

// 胆矾脚手架项目
npm install @2dfire/fire-ui -D
```

##### 引入组件
- 方式一：全部引用
``` javascript
// 在main.js中引入插件
import FireUi from '@2dfire/fire-ui'
import '@2dfire/fire-ui/dist/index.css'
Vue.use(FireUi)
```

- 方式二：部分引用
``` javascript
// 安装babel-plugin-component
npm install babel-plugin-component --save-dev
```
``` javascript
// 在.babelrc 下面添加插件配置
{
    plugin: [
        xxx,
        [
            "component", {
                "libraryName": "@2dfire/component-ui",
                "style": true,
            },
            "@2dfire/component-ui"
        ]
    ]
}
```

接下来你可以在代码中引入组件了， 插件会实现按需加载了
``` javascript
import { Dialog } from '@2dfire/fire-ui'
import '@2dfire/fire-ui/lib/index.css'
// 全局注册（在main.js中注册）
Vue.component(Dialog.name, Dialog)

// 在需要使用的组件内引用
export default{
    name: 'xx',
    components: {
        Dialog
    }
}

```

##
**⚠️最终打包的css单位为px，如果要转换成rem，需要在对应工程中去配置postcss-pxtorem，此外注意在webpack的test: /\.css$/中不要去忽略node_module,postcss-pxtorem简单配置如下**

``` javascript
postcss: [
      require('postcss-pxtorem')({
        rootValue: 37.5,
        unitPrecision: 5, // 转换成rem后的小数点位数
        propList: ['*'], // 需要转换的css属性列表
        minPixelValue: 1.1, // 设置一个最小值，小于这个值就不会被转换为rem
      }),
      require('autoprefixer')({
        browsers: ['last 2 versions', 'Android > 4', 'iOS > 6', 'Safari > 6']
      })
    ]
```
