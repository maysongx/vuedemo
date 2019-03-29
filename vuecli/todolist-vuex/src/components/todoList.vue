<template>
	<div class="todoList">
		<ul>
			<todoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"></todoItem>
		</ul>
	</div>
</template>

<script>
	import todoItem from './todoItem.vue';
	import {
		mapState
	} from 'vuex';
	//使用自定义localStorage工具模块
	import localStorageUtil from '../utils/localStorageUtil.js';
	export default {
		name: 'todoList',
		computed: {
			...mapState(['todos'])
		},
		components: {
			todoItem
		},
		//深度监视todos的变化，只要发生变化，就要将新的todos存入到localStorage缓存
		watch: {
			todos: {
				deep: true,
				handler: localStorageUtil.setLocalStorage
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import '../assets/css/list.scss';
</style>
