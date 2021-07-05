<template>
	<div class="todoHeader"><input type="text" v-model="title" @keyup.enter="add" placeholder="请输入你的任务名称,按回车键确认" /></div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			title: ''
		};
	},
	methods: {
		add() {
			const { title } = this;
			if (title.length > 0) {
				var todoItem = { title, complete: false };
				// 父组件传递回调函数到子组件：
				// 2. 使用 $emit('事件名',参数)触发事件
				this.$emit('addtodoItem', todoItem);
				this.title = '';
			} else {
				alert('输入不可以为空！');
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
