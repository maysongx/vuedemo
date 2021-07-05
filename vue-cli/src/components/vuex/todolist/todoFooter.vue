<template>
	<div class="todo-footer" v-show="totalCount">
		<input type="checkbox" v-model="isCurAllChecked" />
		<span>已完成{{ completedCount }}</span>
		<span>全部{{ totalCount }}</span>
		<button class="btn" v-show="completedCount" @click="deletCompleteTodos">清除已完成的任务</button>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'todo-footer',
	data() {
		return {};
	},
	computed: {
		...mapGetters('todolist', ['totalCount', 'completedCount']),
		isCurAllChecked: {
			get() {
				// 从计算属性里面 获取的数据
				return this.$store.getters['todolist/isAllSelected'];
			},
			set(val) {
				// 自定义方法设置 全选或者全不选
				this.isSelectedAllOrNot(val);
			}
		}
	},
	methods: {
		...mapActions('todolist', ['deletCompleteTodos', 'isSelectedAllOrNot'])
	}
};
</script>

<style lang="scss" scoped>
.todo-footer {
	text-align: left;
	input,
	span,
	button {
		margin: 0px 20px;
	}
}
</style>
