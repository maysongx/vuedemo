// 包含多个更新state状态的函数的对象
export default {
	// 加1
	addState(state) {
		state.count++
	},

	// 减1
	reduceState(state) {
		state.count--;
	}
}
