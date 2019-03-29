// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Global from './components/global'

Vue.config.productionTip = false

//注册全局组件（一般都是使用局部组件）
Vue.component('globalCompoent',Global);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        //注册组件
        App
    },
    template: '<App/>'
})


// index.html---main.js---App.vue