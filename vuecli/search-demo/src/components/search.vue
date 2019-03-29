<template>
	<div class="search">
		<section class="jumbotron">
			<h3 class="text-center">Search Github Users</h3>
			<div class="text-center">
				<input v-model="searchName" type="text" placeholder="enter the name you search" />
				<button @click="search">Search</button>
			</div>
		</section>
	</div>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
	name: 'search',
	data() {
		return {
			searchName: ''
		};
	},
	methods: {
		search() {
			const searchNameText=this.searchName.trim();
			if(searchNameText){
				//发布消息：触发事件
				PubSub.publish('searchInfo', searchNameText);
			}
		}
	}
};
</script>

<style></style>
