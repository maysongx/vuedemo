// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入全局的public.css文件
import './assets/css/public.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>'
})
