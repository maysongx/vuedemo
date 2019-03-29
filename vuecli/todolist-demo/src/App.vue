<template>
	<div id="app">
		<!--父组件将回调函数传递给子组件方法一（注册事件监听）：
		1. 给todoHeader绑定addtodoItem事件监听 addtodoItem是一个回调函数-->
		<todoHeader @addtodoItem="addtodoItem"></todoHeader>
		<todoList :todos="todos" :deleteItem="deleteItem"></todoList>
		<todoFooter
			:todos="todos"
			:deletCompleteTodos="deletCompleteTodos"
			:selectAllTodos="selectAllTodos"
		></todoFooter>
	</div>
</template>

<script>
import todoHeader from './components/todoHeader.vue';
import todoList from './components/todoList.vue';
import todoFooter from './components/todoFooter.vue';
//使用自定义localStorage工具模块
import localStorageUtil from './utils/localStorageUtil.js';

export default {
	name: 'App',
	components: {
		todoHeader,
		todoList,
		todoFooter
	},
	data() {
		return {
			// 调用localStorageUtil模块里面的方法
			todos: localStorageUtil.getLocalStorage()
		};
	},
	// 深度监视todos的变化，只要发生变化，就要将新的todos存入到localStorage缓存
	watch: {
		todos: {
			keep: true, //表示深度监视
			/*
				设置todos_key（将newValue最新的JSON值保存到localStorage中）
			  调用localStorageUtil模块里面的方法
			*/
			handler: localStorageUtil.setLocalStorage
			// 		 等同于下面的代码
			// 			handler: function(newValue, oldValue) {
			// 				localStorageUtil.setLocalStorage(newValue);
			// 			},
		}
	},
	methods: {
		//将对象添加到todos
		addtodoItem(todoItem) {
			this.todos.push(todoItem);
		},
		//根据index删除当前项
		deleteItem(index) {
			this.todos.splice(index, 1);
		},
		//删除已完成的任务
		deletCompleteTodos() {
			this.todos = this.todos.filter(todo => !todo.complete);
		},
		//全选或全不选
		selectAllTodos(isCheck) {
			//遍历todos，将complete设置为true或false
			this.todos.forEach(todo => (todo.complete = isCheck));
		}
	}
};
</script>
