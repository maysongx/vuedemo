// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入vue路由之前，需要先下载 npm install vue-router --save
import VueRouter from 'vue-router'
// 引入vue resource之前，需要先下载安装 npm install vue-resource --save
import VueResource from 'vue-resource'
import Users from  './components/Users'
import test from  './components/test'


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false
//设置路由
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: "/",
            component: Users
        },
        {
            path: "/test",
            component: test
        }
    ]
})


new Vue({
    router,
    template: `
  <div id="app">
 <h1>路由列表</h1>
  <ul>
  <li>
  <router-link to="/">Users</router-link>
  <router-link to="/test">test</router-link>
</li>
</ul>
<router-view></router-view>
</div>
  `
}).$mount(("#app"))


