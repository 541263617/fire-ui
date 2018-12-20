import Introduce from '../views/content/Introduce.md'
import Develop from '../views/content/Develop.md'
import Button from '../views/content/Button.md'
import Checkbox from '../views/content/Checkbox.md'
import CheckboxButton from '../views/content/CheckboxButton.md'
import CheckboxGroup from '../views/content/CheckboxGroup.md'
import Dialog from '../views/content/Dialog.md'
import LineInput from '../views/content/LineInput.md'
import LineText from '../views/content/LineText.md'
import Mask from '../views/content/Mask.md'
import Message from '../views/content/Message.md'
import Picker from '../views/content/Picker.md'
import Radio from '../views/content/Radio.md'
import ScrollLoading from '../views/content/ScrollLoading.md'
import Slide from '../views/content/Slide.md'
import Steps from '../views/content/Steps.md'
import SubTitle from '../views/content/SubTitle.md'
import TabPane from '../views/content/TabPane.md'
import Tabs from '../views/content/Tabs.md'
import Title from '../views/content/Title.md'
import Toast from '../views/content/Toast.md'
import View from '../views/content/View.md'

export const routes = [
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
    path: '/',
    redirect: '/Introduce'
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
