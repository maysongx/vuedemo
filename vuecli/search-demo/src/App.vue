<template>
	<div id="app">
		<div class="container">
			<search></search>
			<usersmain></usersmain>
		</div>
	</div>
</template>

<script>
import search from './components/search.vue';
import main from './components/main.vue';
export default {
	name: 'App',
	components: {
		search,
		usersmain: main
	},
	data() {
		return {};
	}
};
</script>
