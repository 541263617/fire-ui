import Vue from 'vue'
import Router from 'vue-router'
import Introduce from '../views/Introduce.vue'
import Develop from '../views/Develop.vue'
import Button from '../views/Button.vue'
import Checkbox from '../views/Checkbox.vue'
import CheckboxButton from '../views/CheckboxButton.vue'
import CheckboxGroup from '../views/CheckboxGroup.vue'
import Dialog from '../views/Dialog.vue'
import LineInput from '../views/LineInput.vue'
import LineText from '../views/LineText.vue'
import Mask from '../views/Mask.vue'
import Message from '../views/Message.vue'
import Picker from '../views/Picker.vue'
import Radio from '../views/Radio.vue'
import ScrollLoading from '../views/ScrollLoading.vue'
import Slide from '../views/Slide.vue'
import Steps from '../views/Steps.vue'
import SubTitle from '../views/SubTitle.vue'
import TabPane from '../views/TabPane.vue'
import Tabs from '../views/Tabs.vue'
import Title from '../views/Title.vue'
import Toast from '../views/Toast.vue'
import View from '../views/View.vue'

Vue.use(Router)

let routes = [
  {
    path: '/',
    redirect: '/Introduce'
  },
  {
    path: '/Introduce',
    name: 'Introduce',
    component: Introduce
  },
  {
    path: '/Develop',
    name: 'Develop',
    component: Develop
  },
  {
    name: 'Button',
    path: '/Button',
    component: Button
  },
  {
    name: 'Checkbox',
    path: '/Checkbox',
    component: Checkbox
  },
  {
    name: 'CheckboxButton',
    path: '/CheckboxButton',
    component: CheckboxButton
  },
  {
    name: 'CheckboxGroup',
    path: '/CheckboxGroup',
    component: CheckboxGroup
  },
  {
    name: 'Dialog',
    path: '/Dialog',
    component: Dialog
  },
  {
    name: 'LineInput',
    path: '/LineInput',
    component: LineInput
  },
  {
    name: 'LineText',
    path: '/LineText',
    component: LineText
  },
  {
    name: 'Mask',
    path: '/Mask',
    component: Mask
  },
  {
    name: 'Message',
    path: '/Message',
    component: Message
  },
  {
    name: 'Picker',
    path: '/Picker',
    component: Picker
  },
  {
    name: 'Radio',
    path: '/Radio',
    component: Radio
  },
  {
    name: 'ScrollLoading',
    path: '/ScrollLoading',
    component: ScrollLoading
  },
  {
    name: 'Slide',
    path: '/Slide',
    component: Slide
  },
  {
    name: 'Steps',
    path: '/Steps',
    component: Steps
  },
  {
    name: 'SubTitle',
    path: '/SubTitle',
    component: SubTitle
  },
  {
    name: 'TabPane',
    path: '/TabPane',
    component: TabPane
  },
  {
    name: 'Tabs',
    path: '/Tabs',
    component: Tabs
  },
  {
    name: 'Title',
    path: '/Title',
    component: Title
  },
  {
    name: 'Toast',
    path: '/Toast',
    component: Toast
  },
  {
    name: 'View',
    path: '/View',
    component: View
  },
  
]

export default new Router({
  routes
})
