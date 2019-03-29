/*
	vuex的核心管理对象模块
*/
import Vue from 'vue'
// 1. 引入
import Vuex from 'vuex'

//2. 声明使用vuex 
Vue.use(Vuex);

// 3. 声明对象 state mutations actions getters

//状态对象
const state = {
	count: 10
}
//包含多个  更新state状态的函数 对象   
const mutations = {
	//给state增加1
	INCREMENT(state) {
		state.count++;
	},
	//给state减少1
	DECREMENT(state) {
		state.count--;
	}
}
//包含多个对应事件的回调函数
const actions = {
	//count 增加1
	increment({
		commit
	}) {
		commit('INCREMENT')
	},
	//count 减少1
	decrement({
		commit
	}) {
		commit('DECREMENT')
	},
	//如果是奇数 增加1
	//even：偶数  	odd：奇数
	incrementOfOdd({
		commit,
		state
	}) {
		if (state.count % 2 === 1) {
			commit('INCREMENT')
		} else {
			alert('当前是偶数，不可以加减');
		}
	},
	//1秒以后 增加1
	incrementAsync({
		commit,
		state
	}) {
		//在action中可以直接执行异步代码
		setTimeout(() => {
			commit('INCREMENT')
		}, 1000);
	}


}
//包含对个计算属性get的对象
const getters = {
	evenorOdd(state) {
		return state.count % 2 === 0 ? '偶数' : '奇数';
	}
}
// 4. 向外暴露
export default new Vuex.Store({
	state, //状态
	mutations, //包含多个更新state函数的对象
	actions, //包含多个对应事件回调函数的对象
	getters //包含对个计算属性get的对象
})
