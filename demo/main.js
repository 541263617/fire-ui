import Vue from 'vue'
import App from './App'
import router from './router'
import './scss/reset.scss'

Vue.config.productionTip = false

/*import FireUi from '../publish/component-ui/dist/index.js'
import '../publish/component-ui/dist/index.css'
Vue.use(FireUi)*/

import FireUi from '../src/index'
Vue.use(FireUi)

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
