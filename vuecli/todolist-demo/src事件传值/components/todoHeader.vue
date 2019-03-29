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
			title: ''
		};
	},
	methods: {
		add() {
			let { title } = this;
			if (title) {
				var todoItem = { title, complete: false };
				// 父组件传递回调函数到子组件：2. 直接触发事件（参数：事件名，参数）
				this.$emit('addtodoItem', todoItem);
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
