// 包含多个更新state状态的函数的对象
export default {
	// 新增 todoItem
	addItem(state, todoItem) {
		state.todos.unshift(todoItem);
	},

	// 根据index 删除 todoItem
	deleteItem(state, index) {
		state.todos.splice(index, 1)
	},

	// 清除已完成的任务项
	deleteCompleteTodos(state) {
		state.todos = state.todos.filter(t => !t.complete)
	},

	// 全选或全不选
	checkedAll_state(state, isChecked) {
		state.todos.forEach(todo => (todo.complete = isChecked))
	}
}
