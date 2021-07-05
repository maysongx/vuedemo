<template>
	<div class="todoListVuex">
		<todoHeader></todoHeader>
		<todoList></todoList>
		<todoFooter></todoFooter>
	</div>
</template>

<script>
import todoHeader from './todoHeader.vue';
import todoList from './todoList.vue';
import todoFooter from './todoFooter.vue';
export default {
	name: 'todolist-vuex',
	data() {
		return {};
	},
	components: {
		todoHeader,
		todoList,
		todoFooter
	}
};
</script>

<style lang="scss" scoped>
.todoListVuex {
	width: 80%;
	margin: 0 auto;
}
</style>
