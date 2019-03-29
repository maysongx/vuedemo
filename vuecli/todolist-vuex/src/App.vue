<template>
	<div id="app">
		<todoHeader />
		<todoList />
		<todoFooter />
	</div>
</template>

<script>
	import todoHeader from './components/todoHeader.vue';
	import todoList from './components/todoList.vue';
	import todoFooter from './components/todoFooter.vue';

	export default {
		name: 'App',
		components: {
			todoHeader,
			todoList,
			todoFooter
		},
		mounted(){
			//发送命令给action，异步获取todos保存，并显示
			this.$store.dispatch('reqTodos')
		},
	};
</script>
