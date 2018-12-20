import TabPane from './src/TabPane.vue'

TabPane.install = function (Vue) {
    Vue.component(TabPane.name, TabPane);
};

export default TabPane;
