<template>
	<div class="comtodolist">
		<h1>更详细的功能，请查看todoMVC项目demo</h1>
		<!--父组件将回调函数传递给子组件方法一（注册事件监听）：
				1. 给todoHeader绑定addtodoItem事件监听; addtodoItem是一个回调函数-->
		<todoHeader @addtodoItem="addtodoItem"></todoHeader>

		<todoList :todos="todos" :deleteItem="deleteItem"></todoList>
	</div>
</template>

<script>
import todoHeader from '../components/component-todolist/todoHeader.vue';
import todoList from '../components/component-todolist/todoList.vue';
import localStorageUtil from '../utils/localStorageUtil.js';
export default {
	name: 'todolist',
	data() {
		return {
			// 从slocalStorage中读取todos
			todos: localStorageUtil.getLocalStorage()
		};
	},
	components: {
		todoHeader,
		todoList
	},
	// 深度监视todos的变化，只要发生变化，就要将新的todos存入到localStorage缓存
	watch: {
		todos: {
			keep: true, // 表示深度监视
			handler: localStorageUtil.setLocalStorage
			// // 等价于下面的写法
			// handler: function(newValue, oldValue) {
			// 	// 设置todos_key（将newValue最新的JSON值保存到localStorage中）
			// 	localStorageUtil.setLocalStorage(newValue);
			// }
		}
	},
	mounted() {
		// 父组件给子组件绑定事件方式二： this.$on('addtodoItem',this.addtodoItem);
		// this.$refs.todoheaderref.$on('addtodoItem', this.addtodoItem);
	},
	methods: {
		// 添加
		addtodoItem(todoItem) {
			this.todos.unshift(todoItem);
		},
		// 根据index删除当前项
		deleteItem(index) {
			this.todos.splice(index, 1);
		},
		// 筛选已完成的任务
		deletCompleteTodos() {
			this.todos = this.todos.filter(todo => !todo.complete);
		},
		// 全选或全不选
		selectAllTodos(isCheck) {
			// 遍历todos，将complete设置为true或false
			this.todos.forEach(todo => (todo.complete = isCheck));
		}
	}
};
</script>

<style lang="scss" scoped>
.comtodolist {
	width: 700px;
	margin: 20px auto;
}
</style>
