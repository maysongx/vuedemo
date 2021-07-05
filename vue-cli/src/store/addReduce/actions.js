// 包含多个用于间接更新状态的方法的对象模块
export default {

	// 加1
	addCount({
		commit
	}) {
		commit('addState')
	},

	// 减1
	reduce({
		commit
	}) {
		commit('reduceState')
	},

	// 如果是 奇数  再加1
	addOdd({
		commit,
		state
	}) {
		if ((state.count) % 2 === 1) {
			commit('addState')
		}
	},

	// 异步加1 (过一秒后加1)
	addAsync({
		commit
	}) {
		setTimeout(() => {
			commit('addState')
		}, 1000);
	}
}
