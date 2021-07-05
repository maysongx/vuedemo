<!-- 子组件向父组件传值  $emit分发事件-->
<template>
	<div class="gheader"><h1 @click="changedTitle">点击头部，可以传递参数给 父组件</h1></div>
</template>

<script>
export default {
	name: 'gheader',
	data() {
		return {
			title: '我是子组件gheader里面的数据'
		};
	},
	methods: {
		changedTitle() {
			this.$emit('getSubComponentTitle', this.title);
		}
	}
};
</script>

<style scoped>
.gheader {
	height: 80px;
	line-height: 80px;
	text-align: center;
	background-color: green;
	color: white;
}
</style>
