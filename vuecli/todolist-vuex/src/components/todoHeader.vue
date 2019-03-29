<template>
	<div class="todoHeader">
		<input
			v-model="title"
			@keyup.enter="add"
			type="text"
			placeholder="请输入你的任务名称,按回车键确认"
		/>
	</div>
</template>

<script>
export default {
	name: 'todoHeader',
	data() {
		return {
			//组件内部使用的数据，不存在共享问题，因此也就不需要使用vuex管理
			title: ''
		};
	},
	methods: {
		add() {
			let { title } = this;
			if (title) {
				var todoItem = { title, complete: false };
				//将totoItem添加到todos
				this.$store.dispatch('addtodoItem',todoItem)
			} else {
				alert('title不可以为空');
			}
		}
	}
};
</script>

<style scoped lang="scss">
@import '../assets/css/header.scss';
</style>
