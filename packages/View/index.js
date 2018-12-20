import View from './src/View.vue'

View.install = function (Vue) {
    Vue.component(View.name, View);
};

export default View;
