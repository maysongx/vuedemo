<template>
	<div class="todoList">
		<div v-for="(todo, index) in todos" :key="index" class="item">
			<label>
				<input type="checkbox" v-model="todo.complete" />
				<span>{{ todo.title }}</span>
			</label>
			<button @click="deleteItemByIndex(index)">删除</button>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	props: {
		todos: {
			type: Array
		},
		deleteItem: {
			type: Function
		}
	},
	data() {
		return {};
	},
	methods: {
		// 删除项
		deleteItemByIndex(index) {
			if (confirm('你确定要删除吗？')) {
				this.deleteItem(index);
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
	list-style-type: none;
	display: flex;
	justify-content: space-between;
	label {
		font-size: 20px;
	}
}
</style>
