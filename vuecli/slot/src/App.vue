<template>
	<div id="app">
		<HelloWorld>
			<h1 slot="xxx">我是h1的内容</h1>
			<h2 slot="yyy">我是h2的内容</h2>
		</HelloWorld>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
	name: 'App',
	components: {
		HelloWorld
	},
	data() {
		return {};
	}
};
</script>
