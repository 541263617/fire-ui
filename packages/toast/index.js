import Toast from './src/Toast.vue';
import Vue from 'vue';

let instance
const initInstance = () => {
    if (instance) return
    let constructor = Vue.extend(Toast)
    instance = new constructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}
/* istanbul ignore next */
const toast = (options) => {
    initInstance()
    if (typeof options === 'string' || typeof options === 'number') {
        options = {
            content: options
        }
    }
    Object.assign(instance, options)
    instance.visible = true
}

export default toast;
