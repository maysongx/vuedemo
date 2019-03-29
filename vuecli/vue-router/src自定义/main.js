import Vue from 'vue'
import App from './App'

import Index from './components/index'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/about'
import Company from './components/company'


//1 引入路由（用来配置路由）
import VueRouter from 'vue-router'
//1 引入resource（用来配置http请求）
import VueResource from 'vue-resource'

Vue.config.productionTip = false
//2 使用路由
Vue.use(VueRouter);
//2 使用resource
Vue.use(VueResource)
//3 配置路由
const router = new VueRouter({
    mode:'history',
    routes: [
        {path: '/', component: Index},
        {path: '/about', component: About},
        {path: '/company', component: Company},
    ],
});
new Vue({
    router,
    el: '#app',
    components: {App},
    template: '<App/>'
})
