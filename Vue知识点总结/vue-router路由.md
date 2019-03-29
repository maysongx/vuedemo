# vue-router使用步骤
#### 1. 下载安装
    cnpm install --save vue-router
            
#### 2. 创建路由器对象模块: router/index.js
```
/*
* 路由器对象模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入各个路由组件
import Login from '../pages/Login/Login'
// 将一级的路由组件懒加载
const MSite = () => import('../pages/MSite/MSite.vue')
//声明使用VueRouter
Vue.use(VueRouter);
//配置路由
const routes = [
  {
    path: '/',
    redirect: '/msite',  //redirectc表示如果找不到页面/  就自动跳转到页面 /msite
  },
  {
    path: '/msite',
    //当使用了组件懒加载以后，MSite是一个返回路由组件的函数，只有在执行此函数时，才会加载路由组件
    //路由组件函数，会在第一次请求对应的路由路径时，才会执行
    component: MSite,
    name:'msitePage'  //别名
    meta: {
      //设置路由对象的参数
      showFooter: true
    }
  },
  {
    path: '/shop',
    component: Shop,
    //嵌套路由
    children: [
      {
        path: '/shop/goods',
        component: ShopGoods
      },
      {
        path: '',
        redirect: '/shop/goods'
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
]

export default new VueRouter({
  mode: 'history',
  //配置所有路由
  routes
})

```
       
#### 3. 注册路由器: main.js
    import router from './router'
    new Vue({
        router
    })
    
#### 4. 使用路由
###### router-link标签：用来生成路由组件标签
    <router-link to="about">Go to XXX</router-link>
    //aboutPage是别名
    <router-link :to="aboutPage">Go to XXX</router-link>
    <router-link :to="{name:'aboutPage'}">Go to XXX</router-link>
###### router-link默认是解析为a标签，如果想要解析为li标签，设置tag属性
    <router-link tag="li" to="/xxx">Go to XXX</router-link>
###### router-view用来显示当前路由组件的页面     
    <router-view></router-view>
    

# 编程式路由导航
#### 跳转到上一次的浏览器页面（浏览器的回退按钮）
    this.$router.go(-1)
#### 跳转到指定的路由
    this.$router.push('/home') ==路由记录会保存,可以返回到当前路由界面
    this.$router.replace(path) ====路由记录不会保存,用新路由替换当前路由(不可以返回到当前路由界面)
    this.$router.push({name:'homePage'})
#### 请求(返回)上一个记录路由    
     this.$router.back():    

# 缓存路由组件对象
    默认情况下，当切换路由组件对象时，路由组件对象会死亡释放，再次切换回来时是重新创建的
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

# 向路由组件传递数据
#### 方法一：路由属性携带参数
###### 1. 配置路由
```
{
    path: '/login/:ID', //传递参数ID，采用占位符的方式
    name: 'loginLink',
    component: login
}
```
###### 2. 路由router-link设置参数值
    <router-link :to="'/login/'+json.ID">{{json.ID}}</router-link>

###### 3. 组件中获取参数
    this.$route.params.ID

#### 方法二：router-view 携带参数
    <router-view :msg="msg"></router-view>
    使用props接收即可使用
  

