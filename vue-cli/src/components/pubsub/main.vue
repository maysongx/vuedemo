<template>
	<div>
		<h2 v-show="firstView">请输入关键字搜索</h2>
		<h2 v-show="loading">请求中...</h2>
		<h2 v-show="errorMsg">{{ errorMsg }}</h2>
		<div class="row" v-show="users.length > 0">
			<div class="card" v-for="(user, index) in users" :key="index">
				<a :href="user.url" target="_blank"><img :src="user.avatarUrl" /></a>
				<p class="card-text">{{ user.username }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import PubSub from 'pubsub-js';
import axios from 'axios';
export default {
	name: 'pubsub',
	data() {
		return {
			firstView: true, // 是否显示初始页面
			loading: false, // 是否正在请求中
			errorMsg: '', // 错误信息
			users: [] // 用户数组
		};
	},
	mounted() {
		// 订阅消息
		PubSub.subscribe('search', (msg, searchName) => {
			this.search(searchName);
		});
	},
	methods: {
		search(searchName) {
			// 初始化数据
			this.firstView = false;
			this.loading = true;
			this.errorMsg = '';
			this.users = [];

			// 发ajax请求进行搜索
			const url = `https://api.github.com/search/users?q=${searchName}`;
			axios
				.get(url)
				.then(response => {
					// 成功了, 更新数据(成功)
					this.loading = false;
					this.users = response.data.items.map(item => ({
						url: item.html_url,
						avatarUrl: item.avatar_url,
						username: item.login
					}));
				})
				.catch(error => {
					console.log(error.message);
					this.loading = false;
					this.errorMsg = '';
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.card {
	width: 100px;
	height: 100px;
	margin: 10px;
	border: 1px solid #efefef;
	text-align: center;
	padding: 10px;
}
.card a {
	width: 60px;
	height: 60px;
	display: block;
	margin: 0 auto;
}
.card a img {
	width: 100%;
}
</style>
