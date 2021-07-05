<template>
	<div>
		<slot name="xxx">不确定的标签结构 1</slot>
		<div>组件确定的标签结构</div>
		<slot name="yyy">不确定的标签结构 2</slot>
	</div>
</template>

<script>
import todoHeader from '../components/component-todolist/todoHeader.vue';
import todoList from '../components/component-todolist/todoList.vue';
export default {
	name: 'todolist',
	data() {
		return {
			// 从slocalStorage中读取todos
			todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
		};
	},
	components: {
		todoHeader,
		todoList
	},

	methods: {}
};
</script>
