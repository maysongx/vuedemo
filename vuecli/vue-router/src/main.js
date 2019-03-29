import Vue from 'vue'
import App from './App'
//引入路由
import router from './routes'
//引入bootstrap样式文件
import './assets/bootstrap-v3.3.7/css/bootstrap.min.css'


Vue.config.productionTip = false
new Vue({
	//配置
	router,
	el: '#app',
	components: {
		App
	},
	template: '<App/>'
})
