import Vue from 'vue'
import Vuex from 'vuex'
import addReduce from './addReduce' // 加1 减1 功能模块
import todolist from './todolist' // 加1 减1 功能模块

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfo: {} // 全局公共state状态
	},
	mutations: {},
	actions: {},
	modules: {
		addReduce,
		todolist
	}
})
