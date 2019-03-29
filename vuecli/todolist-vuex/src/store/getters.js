/*
	包含所有基于state的getter计算属性的 对象
*/
export default {
	completeLength(state) {
		return state.todos.reduce((total, todo) => {
			return total + (todo.complete ? 1 : 0)
		}, 0)
	},
	allLength(state) {
		return state.todos.length
	},
	//是否全部选中或不选中 返回值是boolean
	isAllSelected(state,getters){
		return getters.completeLength === getters.allLength && getters.allLength > 0
	}
}
