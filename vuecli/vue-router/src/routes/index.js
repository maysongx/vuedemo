/*
	路由器模块
	路由器配置文件
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import home from '../views/Home.vue'
import about from '../views/About.vue'
//引入home组件的子组件
import news from '../views/News.vue'
import message from '../views/Message.vue'
import messagedetails from '../views/MessageDetails.vue'


Vue.use(VueRouter)

//配置路由
const routes = [{
		path: '/home',
		component: home,
		//嵌套路由
		children: [{
				// path中最左侧的/ 表示是根路径
				//想要表示当前路径下面的路径：/home/news  或  news
				path: '/home/news',
				component: news,
				name: 'newspage',
			}, {
				path: 'message',
				component: message,
				name: 'messagepage',
				children: [{
					path: '/home/message/messagedetails/:id',
					component: messagedetails
				}]
			},
			//home页面默认是显示news组件信息
			{
				path: '/home',
				redirect: '/home/news'
			}
		]
	},
	{
		path: '/about',
		component: about
	},
	//默认显示home
	{
		path: '/',
		redirect: '/about'
	}
]
export default new VueRouter({
	mode: 'history',
	base: __dirname,
	//指定选中的路由链接的 class
	linkActiveClass: 'curActiveClass',
	routes: routes
})
