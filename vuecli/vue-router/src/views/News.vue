<template>
	<div class="news">
		<ul>
			<li v-for="(news,index) in newsArr" :key="index">{{ news }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newsArr: ['news001', 'news002', 'news003']
		};
	}
};
</script>

<style></style>
