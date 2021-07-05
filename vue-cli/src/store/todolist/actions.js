// 包含多个用于间接更新状态的方法的对象模块
export default {
	// 新增 todoItem
	addItem({
		commit
	}, todoItem) {
		console.log(todoItem, 'actions')
		commit('addItem', todoItem)
	},

	// 删除 todoItem 根据index
	deleteItemByIndex({
		commit
	}, index) {
		commit('deleteItem', index)
	},

	// 清除已完成的任务
	deletCompleteTodos({
		commit
	}) {
		commit('deleteCompleteTodos')
	},

	// 全选或全不选
	isSelectedAllOrNot({
		commit
	}, isChecked) {
		commit('checkedAll_state', isChecked)
	}
}
