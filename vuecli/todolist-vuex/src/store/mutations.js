/*
	包含多个 由actions触发，直接更新状态
*/
import {
	ADD_TODO,
	DELETE_TODO,
	SELECT_ALL_TODO,
	DELETE_ALL_COMPLETE,
	REQ_TODOS
} from './mutation-types'
export default {
	[ADD_TODO](state, {
		totoItem
	}) {
		state.todos.push(totoItem);
	},
	[DELETE_TODO](state, {
		index
	}) {
		state.todos.splice(index, 1);
	},
	[SELECT_ALL_TODO](state, {
		isCheck
	}) {
		state.todos.forEach(todo => {
			todo.complete = isCheck;
		})
	},
	[DELETE_ALL_COMPLETE](state) {
		state.todos = state.todos.filter(todo => !todo.complete)
	},
	[REQ_TODOS](state,
		todos
	) {
		state.todos = todos;
	}
}
