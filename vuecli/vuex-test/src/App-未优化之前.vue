<template>
	<div id="app">
		<p>Click {{ $store.state.count }} times,count is {{ $store.getters.evenorOdd }}</p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOfOdd">increment of odd</button>
		<button @click="incrementAsync">increment async</button>
	</div>
</template>

<script>
export default {
	name: 'App',
	methods: {
		//调用store中相互对应的的action
		increment() {
			//触发store中对应的
			this.$store.dispatch('increment');
		},
		//调用store中相互对应的的action
		decrement() {
			this.$store.dispatch('decrement');
		},
		//调用store中相互对应的的action
		incrementOfOdd() {
			this.$store.dispatch('incrementOfOdd');
		},
		//调用store中相互对应的的action
		incrementAsync() {
			this.$store.dispatch('incrementAsync');
		}
	}
};
</script>
