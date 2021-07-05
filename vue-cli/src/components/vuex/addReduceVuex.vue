<template>
	<div>
		<h1>加1减1功能--vuex版本</h1>
		<h3>点击了 {{ count }} 次，{{ count }} 当前是 {{ evenOdd }}</h3>
		<button @click="add">加1</button>
		<button @click="reduce">减1</button>
		<button @click="addOdd">如果是奇数加1</button>
		<button @click="addAsync">过1秒后，异步加1</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
	data() {
		return {};
	},
	mounted() {},
	computed: {
		// 或者使用这种方式获取 state ：$store.state.addReduce.count
		...mapState('addReduce', {
			count: state => state.count
		}),

		...mapGetters('addReduce', ['evenOdd'])
	},
	methods: {
		...mapActions('addReduce', ['addCount']),

		// 加1
		add() {
			this.addCount();
		},

		// 减1
		reduce() {
			// 记住：如果是设置了命令空间，使用下面的方式
			this.$store.dispatch('addReduce/reduce');
		},

		// 如果是 奇数  再加1
		addOdd() {
			this.$store.dispatch('addReduce/addOdd');
		},
		// 异步加1 (过一秒后加1)
		addAsync() {
			this.$store.dispatch('addReduce/addAsync');
		}
	}
};
</script>
<style scoped>
button {
	margin: 0 10px;
	padding: 6px 10px;
	font-size: 20px;
}
</style>
