<template>
	<div class="todoHeader"><input v-model="title" @keyup.enter="add" type="text" placeholder="请输入你的任务名称,按回车键确认" /></div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'todo-header',
	data() {
		return {
			// 组件内部使用的数据，不存在共享问题，因此也就不需要使用vuex管理
			title: ''
		};
	},
	methods: {
		...mapActions('todolist', ['addItem']),
		add() {
			if (this.title.trim()) {
				const todoItem = {
					title: this.title,
					complete: false
				};
				this.addItem(todoItem);
				this.title = '';
			} else {
				alert('title不可以为空');
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.todoHeader {
	input {
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-radius: 6px;
		font-size: 20px;
		padding: 0 10px;
		border: 1px #908484 solid;
		outline: none;
	}
}
</style>
