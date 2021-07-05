// 包含n个基于state的getter计算属性方法的对象模块
export default {
	// 总任务项
	totalCount(state) {
		return state.todos.length
	},

	// 所有已完成项
	completedCount(state) {
		return state.todos.reduce((preTotal, todo) => {
			return preTotal + (todo.complete ? 1 : 0)
		}, 0)
		// 或者
		// return state.todos.filter(t => t.complete).length
	},

	// 全选/全不选  get()
	isAllSelected(state, getters) {
		return getters.completedCount === getters.totalCount && getters.totalCount > 0
	}
}
