<template>
	<div id="app">
		<p>Click {{ count }} times,count is {{ evenorOdd }}</p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOfOdd">increment of odd</button>
		<button @click="incrementAsync">increment async</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
	name: 'App',
	computed: {
		...mapState(['count']),
		...mapGetters(['evenorOdd'])
	},
	methods: {
		...mapActions(['increment', 'decrement', 'incrementOfOdd', 'incrementAsync'])
	}
};
</script>
