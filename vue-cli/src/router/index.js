import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: home
	},
	{
		path: '/AjaxVueResource',
		name: 'AjaxVueResource',
		// 设置路由懒加载
		component: () => import('../views/ajax-vue-resource.vue')
	},
	{
		path: '/AjaxAxios',
		name: 'AjaxAxios',
		component: () => import('../views/ajax-axios.vue')
	},
	{
		path: '/components1',
		name: 'components1',
		component: () => import('../views/components1.vue')
	},
	{
		path: '/componentComment',
		name: 'componentComment',
		component: () => import('../views/component-comment.vue')
	},
	{
		path: '/componentTodolist',
		name: 'componentTodolist',
		component: () => import('../views/components-todolist.vue')
	},
	{
		path: '/slot',
		name: 'slot',
		component: () => import('../views/slot.vue')
	},
	{
		path: '/pubsub',
		name: 'pubsub',
		component: () => import('../views/pubsub.vue')
	},
	{
		path: '/vuexdemo',
		name: 'vuexdemo',
		component: () => import('../views/vuex-demo'),
		children: [
			// 设置一个默认路径
			{
				path: '',
				redirect: '/vuexdemo/addReduce'
			},
			{
				path: 'addReduce',
				component: () => import('../components/vuex/addReduce.vue')
			}, {
				path: 'addReduceVuex',
				component: () => import('../components/vuex/addReduceVuex.vue')
			},
			{
				path: 'todoListVuex',
				component: () => import('../components/vuex/todolist/todoListVuex.vue')
			}
		]
	}
]

const router = new VueRouter({
	routes
})

export default router
