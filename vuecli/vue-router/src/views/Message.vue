<template>
	<div class="message">
		<ul>
			<!-- :key一般都是写index，但是如果对象有自己的标识属性，那么就应该写自己的标识属性 -->
			<li v-for="msg in messages" :key="msg.id">
				<router-link :to="`/home/message/messagedetails/${msg.id}`">{{ msg.title }}</router-link>
				<button @click="pushShow(msg.id)">push查看</button>
				<button @click="replaceShow(msg.id)">replace查看</button>
			</li>
		</ul>
		<hr />
		<router-view></router-view>
		<button @click="reback">回退</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			messages: []
		};
	},
	mounted() {
		//模拟从后台获取数据
		setTimeout(() => {
			const newMsg = [
				{
					id: 1,
					title: 'message001',
					content: 'this is message001 content'
				},
				{
					id: 2,
					title: 'message002',
					content: 'this is message002 content'
				},
				{
					id: 3,
					title: 'message003',
					content: 'this is message003 content'
				},
				{
					id: 4,
					title: 'message004',
					content: 'this is message004 content'
				}
			];
			this.messages = newMsg;
		}, 2000);
	},
	methods: {
		pushShow(id) {
			this.$router.push(`/home/message/messagedetails/${id}`);
		},
		replaceShow(id) {
			this.$router.replace(`/home/message/messagedetails/${id}`);
		},
		//回退
		reback(){
			this.$router.go(-1)
		}
	}
};
</script>

<style></style>
