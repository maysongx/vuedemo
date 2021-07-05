<template>
	<div class="gfooter">
		<h1>{{ title }}</h1>
	</div>
</template>

<script>
export default {
	name: 'gfooter',
	data: function() {
		return {
			title: 'gfooter.vue页面'
		};
	}
};
</script>

<style scoped>
.gfooter {
	height: 80px;
	line-height: 80px;
	text-align: center;
	background-color: green;
	color: white;
}
</style>
