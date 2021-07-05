import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// elementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 加载一个全局组件
import globalComponent from './components/component1/globalComponent.vue'

// 引入模块 vue-resource
import VueResource from 'vue-resource';
// 使用vue-resource
Vue.use(VueResource);

// 注册声明使用
Vue.use(ElementUI);

// 注册一下全局组件
Vue.component('globalC', globalComponent)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
