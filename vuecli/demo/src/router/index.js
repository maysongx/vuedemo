import Vue from 'vue'
import Router from 'vue-router'
//一级路由设置
import Index from '../components/Index'
import Company from '../components/Company'
import About from '../components/About'
import Login from '../components/Login'
import Register from '../components/Register'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/Company',
            name: 'Company',
            component: Company
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        }
    ]
})
