// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入全局的public.css文件
import './assets/css/public.scss'

import store from './store'

Vue.config.productionTip = false

// new Vue({
// 	store,
// 	el: '#app',
// 	components: {
// 		App
// 	},
// 	template: '<App/>'
// })

//下面是render的配置
new Vue({
	store,
	el: '#app',
	render: h => h(App)
})
