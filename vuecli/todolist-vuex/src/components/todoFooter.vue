<template>
	<div class="todoFooter">
		<input type="checkbox" v-model="isAllCheck">
		<span>已完成{{completeLength}}</span>
		<span>全部{{allLength}}</span>
		<button class="btn" v-show="completeLength" @click="deletCompleteTodos">清除已完成的任务</button>
	</div>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex';
	export default {
		name: "todoFooter",
		data() {
			return {};
		},
		computed: {
			...mapGetters(['completeLength', 'allLength']),
			isAllCheck: {
				get() {
					return this.$store.getters.isAllSelected
				},
				//value是当前checbox的值 是boolean值，要么勾选，要么不勾选
				set(isCheck) {
					this.$store.dispatch('selectAllTodos', isCheck)
				}
			},
		},
		methods: {
			...mapActions(['deletCompleteTodos'])
			//等同于下面的
			//删除已经完成的所有任务
// 			deletCompleteTodos() {
// 				this.$store.dispatch('deletCompleteTodos')
// 			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../assets/css/footer.scss";
</style>
