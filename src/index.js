import './index.scss'
import './animations.scss'
import Button from '../packages/Button'
import Checkbox from '../packages/Checkbox'
import CheckboxButton from '../packages/CheckboxButton'
import CheckboxGroup from '../packages/CheckboxGroup'
import Dialog from '../packages/Dialog'
import LineInput from '../packages/LineInput'
import LineText from '../packages/LineText'
import Mask from '../packages/Mask'
import Message from '../packages/Message'
import Picker from '../packages/Picker'
import Radio from '../packages/Radio'
import ScrollLoading from '../packages/ScrollLoading'
import Slide from '../packages/Slide'
import Steps from '../packages/Steps'
import SubTitle from '../packages/SubTitle'
import TabPane from '../packages/TabPane'
import Tabs from '../packages/Tabs'
import Title from '../packages/Title'
import Toast from '../packages/Toast'
import View from '../packages/View'

const install = function (Vue, options = {}) {
    if (install.installed) return

    Vue.component(Button.name, Button)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(CheckboxButton.name, CheckboxButton)
    Vue.component(CheckboxGroup.name, CheckboxGroup)
    Vue.component(Dialog.name, Dialog)
    Vue.component(LineInput.name, LineInput)
    Vue.component(LineText.name, LineText)
    Vue.component(Mask.name, Mask)
    Vue.component(Picker.name, Picker)
    Vue.component(Radio.name, Radio)
    Vue.component(ScrollLoading.name, ScrollLoading)
    Vue.component(Slide.name, Slide)
    Vue.component(Steps.name, Steps)
    Vue.component(SubTitle.name, SubTitle)
    Vue.component(TabPane.name, TabPane)
    Vue.component(Tabs.name, Tabs)
    Vue.component(Title.name, Title)
    Vue.component(View.name, View)

    Vue.prototype.$toast = Toast
    Vue.prototype.$alert = Message.alert
    Vue.prototype.$confirm = Message.confirm
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    Button,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Dialog,
    LineInput,
    LineText,
    Mask,
    Message,
    Picker,
    Radio,
    ScrollLoading,
    Slide,
    Steps,
    SubTitle,
    TabPane,
    Tabs,
    Title,
    Toast,
    View
}
