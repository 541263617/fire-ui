import Confirm from './src/Message.vue'
import Vue from 'vue';

const defaults = {
    type: 'alert',
    title: '提示',
    content: '请确定当前操作',
    confirmText: '确定',
    cancelText: '取消',
    confirm: null,
    cancel: null
}
const message = {}
let instance
const initInstance = () => {
    if (instance) return
    let constructor = Vue.extend(Confirm)
    instance = new constructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
}
message.alert = (options) => {
    initInstance()
    if (typeof options === 'string' || typeof options === 'number') {
        options = {
            content: options
        }
    }
    Object.assign(instance, defaults, options)
    instance.type = 'alert';
    instance.visible = true
}

message.confirm = (options) => {
    initInstance()
    if (typeof options === 'string' || typeof options === 'number') {
        options = {
            content: options
        }
    }
    Object.assign(instance, defaults, options)
    instance.type = 'confirm';
    instance.visible = true
}

export default message
