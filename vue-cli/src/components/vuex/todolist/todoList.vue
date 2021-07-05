<template>
	<div class="todoList">
		<div class="item" v-for="(todo, index) in todos" :key="index">
			<label for>
				<input type="checkbox" v-model="todo.complete" />
				<span>{{ todo.title }}</span>
			</label>
			<button @click="deletByIndex(todo.title, index)">删除</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import localStorageUtil from '../../../utils/localStorageUtil.js';
export default {
	name: 'todo-list',
	data() {
		return {};
	},
	computed: {
		...mapState('todolist', {
			todos: state => state.todos
		})
	},
	methods: {
		...mapActions('todolist', ['deleteItemByIndex']),
		deletByIndex(title, index) {
			if (confirm(`你确定要删除： ${title}   吗？`)) {
				this.deleteItemByIndex(index);
			}
		}
	},
	watch: {
		// 深度监视todos的变化
		todos: {
			deep: true,
			handler: function(val) {
				localStorageUtil.setLocalStorage_vuex(val);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.item {
	height: 40px;
	line-height: 40px;
	margin: 10px 0px;
	display: flex;
	justify-content: space-between;
}
</style>
