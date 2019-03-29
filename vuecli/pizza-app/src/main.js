import Vue from 'vue'
import App from './App.vue'
import about from '../components/about/About'
import admin from '../components/Admin'
import home from '../components/Home'
import login from '../components/Login'
import register from '../components/Register'
import menu from '../components/Menu'
import VueRouter from 'vue-router'

// 二级路由
import contact from '../components/about/Contact'
import delivery from '../components/about/Delivery'
import history from '../components/about/History'
import orderingGuide from '../components/about/OrderingGuide'

//三级路由
import phone from '../components/about/contact/Phone'
import personName from '../components/about/contact/PersonName'


Vue.use(VueRouter)

const routers = [
  {path: '/', name: 'homeLink', component: home},
  {
    path: '/about',
    name: 'aboutLink',
    redirect: '/contact',
    component: about,
    children: [
      {
        path: '/contact',
        name: 'contactLink',
        redirect: '/about/contact/phone',
        component: contact,
        children: [
          {path: '/about/contact/phone', name: 'phoneNumberLink', component: phone},
          {path: '/about/contact/personname', name: 'personNameLink', component: personName},
        ]
      },
      {path: '/delivery', name: 'deliveryLink', component: delivery},
      {path: '/about/history', name: 'historyLink', component: history},
      {path: '/about/orderingGuide', name: 'orderingGuideLink', component: orderingGuide},
    ]
  },
  {path: '/admin', name: 'adminLink', component: admin},
  {path: '/register', name: 'registerLink', component: register},
  {path: '/login', name: 'loginLink', component: login},
  {path: '/menu', name: 'menuLink', component: menu},
  // 如果找不到相关页面，自动跳转到首页
  {path: '*', redirect: '/'}
]
const router = new VueRouter({
  mode: 'history',
  routes: routers
})
//vue中的守卫方式：全局守卫、组件内守卫、路由守卫
//注册一个全局导航守卫

// router.beforeEach((to,from,next)=>{
//     /* 导航守卫
//     * to: Route: 即将要进入的目标 路由对象
//     * from: Route: 当前导航正要离开的路由
//     * next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数
//     * next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
//     * next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
//     * next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
//     * next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
//     * */
//
//
//
// })

// main.js：主要是入口文件，创建Vue实例
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
