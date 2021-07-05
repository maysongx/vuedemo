<template>
	<div>
		<h1>加1减1功能--基础版本</h1>
		<h3>点击了 {{ count }} 次，{{ count }} 当前是 {{ evenOdd }}</h3>
		<button @click="add">加1</button>
		<button @click="reduce">减1</button>
		<button @click="addOdd">如果是奇数加1</button>
		<button @click="addAsync">过1秒后，异步加1</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 0
		};
	},
	computed: {
		// 计算当前count是奇数还是偶数
		evenOdd() {
			return this.count % 2 === 0 ? '偶数' : '奇数';
		}
	},
	methods: {
		// 加1
		add() {
			this.count++;
		},

		// 减1
		reduce() {
			this.count--;
		},

		// 如果是 奇数  再加1
		addOdd() {
			if (this.evenOdd === '奇数') {
				this.count++;
			}
		},

		// 异步加1 (过一秒后加1)
		addAsync() {
			setTimeout(() => {
				this.count++;
			}, 1000);
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
