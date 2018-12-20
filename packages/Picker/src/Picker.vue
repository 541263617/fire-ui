<template>
    <div>
        <transition name="fade">
            <div class="mask" v-show="visible" @click="cancel"></div>
        </transition>
        <transition name="slide">
            <div class="picker" v-show="visible">
                <div class="picker-title">
                    <span class="pt-cancel" @click="cancel">{{textCancel}}</span>
                    <span class="pt-submit" @click="confirm">{{textConfirm}}</span>
                    <h4>{{textTitle}}</h4>
                </div>
                <div class="picker-panel">
                    <div class="picker-mask-top"></div>
                    <div class="picker-mask-bottom"></div>
                    <div class="picker-wheel-wrapper" ref="wheelWrapper">
                        <div class="picker-wheel" v-for="(wheel, index) in pickerData" :key="index">
                            <ul class="wheel-scroll">
                                <li class="wheel-item" v-for="item in wheel" :key="item[code]">{{item[name]}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    import getDate from './data/date.js'

    const TYPE_DATE = 'date'
    const TYPE_MONTH = 'month'
    const TYPE_YEAR = 'year'

    export default {
        name: 'FPicker',
        props: {
            data: {
                type: Array,
                default() {
                    return []
                }
            },
            value: {
                type: [Number, String, Array],
                default() {
                    return new Date().getTime()
                }
            },
            minDate: {
                type: Number,
                default() {
                    let curYear = new Date().getFullYear()
                    return new Date(`${curYear - 5}-01-01`).getTime()
                }
            },
            maxDate: {
                type: Number,
                default() {
                    return new Date().getTime()
                }
            },
            type: {
                type: String,
                default() {
                    return 'date'
                }
            },
            visible: {
                type: Boolean,
                default() {
                    return false
                }
            },
            unit: {
                type: Boolean,
                default() {
                    return true
                }
            },
            polyfill: {
                type: Boolean,
                default() {
                    return false
                }
            },
            textConfirm: {
                type: String,
                default() {
                    return '确认'
                }
            },
            textCancel: {
                type: String,
                default() {
                    return '取消'
                }
            },
            textTitle: {
                type: String,
                default() {
                    return '标题'
                }
            },
            swipeTime: {
                type: Number,
                default() {
                    return 1500
                }
            },
            code: {
                type: String,
                default() {
                    return 'code'
                }
            },
            name: {
                type: String,
                default() {
                    return 'name'
                }
            },
        },
        methods: {
            getTimestamp(dateList) {
                let _list = dateList.map(item => {
                    if (parseInt(item) < 10) {
                        return '0' + item
                    } else {
                        return item + ''
                    }
                })
                return new Date(_list.join('-')).getTime()
            },
            confirm() {
                const isInTransition = this.wheels.some((wheel) => {
                    return wheel.isInTransition
                })
                if (isInTransition) {
                    return
                }
                const selectedValues = this.getSelectedValue()
                let dateList = selectedValues.map(item => {
                    return item[this.code]
                })
                /*date类型 自动转换成“时间戳”返回*/
                if (this.isDateType) {
                    this.$emit('input', this.getTimestamp(dateList))
                } else {
                    let len = dateList.length
                    if (len === 1) {
                        this.$emit('input', dateList[0])
                    } else {
                        this.$emit('input', dateList)
                    }
                }
                this.$emit('confirm', selectedValues)
                this.hide()
            },
            cancel() {
                this.$emit('cancel')
                this.hide()
            },
            show() {
                this.getCurrentIndex()
                if (!this.wheels.length) {
                    this.updatePickerData()
                    this.$nextTick(() => {
                        const wheelWrapper = this.$refs.wheelWrapper
                        this.pickerData.forEach((item, index) => {
                            this.createWheel(wheelWrapper, index).enable()
                        })
                        this.wheelTo(this.currentIndex)
                    })
                } else {
                    this.wheelTo(this.currentIndex)
                    this.wheels.forEach((wheel) => {
                        wheel.enable()
                    })
                }
            },
            hide() {
                this.wheels.forEach((wheel) => {
                    wheel.disable()
                })
                this.$emit('update:visible', false)
            },
            updatePickerData(wheelIndex = 0) {
                let data = [...this.defaultData]
                let i = 0
                while (data) {
                    if (i >= wheelIndex) {
                        let wheelData = []
                        data.forEach((item) => {
                            wheelData.push({
                                [this.code]: item[this.code],
                                [this.name]: item[this.name]
                            })
                        })
                        this.pickerData[i] = wheelData
                        this.currentIndex[i] = wheelIndex === 0
                            ? (this.currentIndex[i] < data.length ? this.currentIndex[i] || 0 : 0)
                            : this.reloadWheel(i, wheelData)
                    }
                    data = data.length ? data[this.currentIndex[i] || 0].children : null
                    i++
                }
            },
            createWheel(wheelWrapper, i) {
                if (!this.wheels[i]) {
                    const wheel = this.wheels[i] = new BScroll(wheelWrapper.children[i], {
                        wheel: {
                            selectedIndex: 0,
                            rotate: 25
                        },
                        swipeTime: this.swipeTime
                    })
                    wheel.on('scrollEnd', () => {
                        if (!wheel.enabled) return
                        this.pickerChange(i)
                    })
                } else {
                    this.wheels[i].refresh()
                }
                return this.wheels[i]
            },
            reloadWheel(index = 0, data) {
                const wheelWrapper = this.$refs.wheelWrapper
                let scroll = wheelWrapper.children[index].querySelector('.wheel-scroll')
                let wheel = this.wheels ? this.wheels[index] : false
                let dist = 0
                if (scroll && wheel) {
                    this.$set(this.pickerData, index, data)
                    this.currentIndex[index] = dist
                    this.$nextTick(() => {
                        wheel = this.createWheel(wheelWrapper, index)
                        wheel.wheelTo(dist)
                    })
                }
                return dist
            },
            destroyWheels() {
                this.wheels.map(wheel => {
                    wheel.destroy()
                })
                this.wheels = []
                this.pickerData = []
                this.currentIndex = []
            },
            wheelTo(data) {
                this.wheels.forEach((wheel, i) => {
                    wheel.wheelTo(data[i] || 0)
                })
            },
            getSelectedValue() {
                const value = []
                this.wheels.forEach((wheel, i) => {
                    const j = wheel.getSelectedIndex()
                    let item = this.pickerData[i][j]
                    value.push({
                        index: j,
                        [this.code]: item[this.code],
                        [this.name]: item[this.name],
                    })
                })
                return value
            },
            getCurrentIndex() {
                let data = [...this.defaultData]
                let i = 0
                while (data) {
                    if (i >= 0) {
                        data.forEach((item, index) => {
                            if (item[this.code] === this.inputValue[i]) {
                                this.currentIndex[i] = index
                            }
                        })
                    }
                    data = data.length ? data[this.currentIndex[i] || 0].children : null
                    i++
                }
            },
            pickerChange(i) {
                const newIndex = this.getSelectedValue()[i].index
                if (newIndex !== this.currentIndex[i]) {
                    this.currentIndex.splice(i, 1, newIndex)
                    this.updatePickerData(i + 1)
                }
            },
            number2String(value) {
                if (!this.polyfill) return value.toString()
                if (value < 10) {
                    return "0" + value
                } else {
                    return value + ''
                }
            }
        },
        data() {
            return {
                pickerData: [],
                currentIndex: [],
                wheels: []
            }
        },
        computed: {
            defaultData() {
                if (this.data.length) {
                    return this.data
                } else {
                    return getDate(this.type, this.minDate, this.maxDate, this.polyfill, this.unit)
                }
            },
            isDateType() {
                //只要用户自定义数据data，不被认为是组件内部类型
                if (this.data.length) {
                    return false
                } else {
                    return [TYPE_DATE, TYPE_MONTH, TYPE_YEAR].indexOf(this.type) > -1
                }
            },
            inputValue() {
                if (this.isDateType) {
                    let _value = this.value
                    if (_value < this.minDate) {
                        _value = this.minDate
                    } else if (_value > this.maxDate) {
                        _value = this.maxDate
                    }
                    let date = new Date(_value)
                    let year = date.getFullYear()
                    let month = date.getMonth() + 1
                    let day = date.getDate()
                    return [this.number2String(year), this.number2String(month), this.number2String(day)]
                } else {
                    if (typeof this.value === 'object')
                        return [...this.value]
                    else
                        return [this.value]
                }
            }
        },
        watch: {
            visible(val) {
                if (val) {
                    this.show()
                }
            },
            data() {
                this.destroyWheels()
            }
        },
        created() {

        },
        beforeDestroy() {
            this.destroyWheels()
        }
    }
</script>

<style lang="scss" scoped>
    /* fade */
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease;
    }

    /* slide */
    .slide-enter, .slide-leave-to {
        opacity: 0.5;
        transform: translate3d(0, 270px, 0)
    }

    .slide-enter-active, .slide-leave-active {
        transition: all .3s ease;
    }

    .mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9999;
        background: rgba(0, 0, 0, .2);
    }

    .picker {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 540px;
        z-index: 10000;
        background: #fff;
    }

    .picker-title {
        position: relative;
        height: 88px;
        color: #333;
        &:after {
            content: '';
            display: block;
            border-bottom: 1PX solid #ebebeb;
            left: 0;
            right: 0;
            transform: scaleY(.5);
        }

        span {
            position: absolute;
            height: 88px;
            line-height: 88px;
            padding: 0 24px;
            font-size: 30px;
        }

        .pt-cancel {
            left: 0;
            color: #0088ff;
        }

        .pt-submit {
            right: 0;
            color: #0088ff;
        }

        h4 {
            margin: 0;
            font-size: 30px;
            font-weight: bold;
            height: 88px;
            line-height: 88px;
            text-align: center;
        }
    }

    .picker-panel {
        position: relative;
        height: 452px;
        padding: 48px 24px;
        box-sizing: border-box;

        .picker-mask-top, .picker-mask-bottom {
            position: absolute;
            left: 0;
            right: 0;
            height: 144px;
            background: #fff;
            transform: translateZ(0);
            z-index: 1;
            pointer-events: none;
        }

        .picker-mask-top {
            top: 48px;
            background: linear-gradient(to bottom, rgba(255, 255, 255, .9), rgba(255, 255, 255, .5));

            &:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                border-bottom: 1PX solid #ebebeb;
                transform: scaleY(.5);
            }
        }

        .picker-mask-bottom {
            bottom: 48px;
            background: linear-gradient(to top, rgba(255, 255, 255, .9), rgba(255, 255, 255, .5));

            &:before {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                border-bottom: 1PX solid #ebebeb;
                transform: scaleY(.5);
            }
        }
    }

    .picker-wheel-wrapper {
        display: flex;
        align-items: stretch;
        height: 100%;

        .picker-wheel {
            flex: 1;
            overflow: hidden;
        }

        .wheel-scroll {
            margin-top: 144px;
            .wheel-item {
                height: 68px;
                line-height: 68px;
                font-size: 34px;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #333;
            }
        }
    }
</style>
