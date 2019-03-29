/*
	包含多个 接收组件通知 触发mutation调用间接状态的方法 的对象
*/
import {
	ADD_TODO,
	DELETE_TODO,
	SELECT_ALL_TODO,
	DELETE_ALL_COMPLETE,
	REQ_TODOS
} from './mutation-types'
import localStorageUtil from '../utils/localStorageUtil.js';
export default {
	//添加todoItem
	addtodoItem({
		commit
	}, totoItem) {
		//提交对mutation的请求
		commit(ADD_TODO, {
			totoItem
		})
	},
	//删除指定的todoItem
	deletetodoItem({
		commit
	}, index) {
		//提交对mutation的请求
		commit(DELETE_TODO, {
			index
		})
	},
	//全选或全不选
	selectAllTodos({
		commit
	}, isCheck) {
		commit(SELECT_ALL_TODO, {
			isCheck
		})
	},
	//删除所有已经完成的任务
	deletCompleteTodos({
		commit
	}) {
		commit(DELETE_ALL_COMPLETE)
	},
	//异步请求获取todos
	reqTodos({
		commit
	}) {
		setTimeout(() => {
			const todos = localStorageUtil.getLocalStorage();
			commit(REQ_TODOS, todos)
		}, 1000)
	}
}
