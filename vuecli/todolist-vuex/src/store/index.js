/*
	vuex的核心管理对象模块store
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"
Vue.use(Vuex);
export default new Vuex.Store({
	state, //状态
	mutations, //包含多个更新state函数的对象
	actions, //包含多个对应事件回调函数的对象
	getters //包含对个计算属性get的对象
})
