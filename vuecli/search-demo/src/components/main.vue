<template>
	<div class="usersmain">
		<h1 v-if="firstView">输入用户名搜索</h1>
		<h1 v-if="loading">loading...</h1>
		<h1 v-if="errorMsg">{{ errorMsg }}</h1>
		<div class="row">
			<!-- user:[{url,avator_url,name}] -->
			<div class="card" v-for="(user, index) in users" :key="index">
				<a :href="user.url" target="_blank"><img :src="user.avator_url" alt="" /></a>
				<p class="card-text">{{ user.name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import PubSub from 'pubsub-js';
export default {
	name: 'usersmain',
	data() {
		return {
			firstView: true,
			loading: false,
			users: null,
			errorMsg: ''
		};
	},
	mounted() {
		//订阅消息：绑定事件监听
		PubSub.subscribe('searchInfo', (msg, searchName) => {
			this.searchInfo(searchName);
		});
	},
	methods: {
		searchInfo(searchName) {
			const url = `https://api.github.com/search/repositories?q=${searchName}&sort=stars`;
			//更新状态
			this.firstView = false;
			this.loading = true;
			this.users=null;
			this.errorMsg='';
			//发送ajax请求
			axios.get(url).then(
				response => {
					//请求数据成功：response.data是返回的结果数据

					const dataObj = response.data;
					const users = dataObj.items.map(item => ({
						url: item.html_url,
						avator_url: item.owner.avatar_url,
						name: item.full_name
					}));
					this.users = users;
					this.loading = false;
				},
				response => {
					this.loading = false;
					//请求数据失败：response.statusText返回的错误信息
					this.errorMsg = response.statusText;
					this.errorMsg = '请求失败！';
				}
			);
		}
	}
};
</script>

<style>
.card {
	float: left;
	width: 33.33%;
	padding: 0.75rem;
	text-align: center;
	border: 1px red solid;
}
.card img {
	border-radius: 100px;
	margin-bottom: 20px;
	width: 100px;
	height: 100px;
}
.card-text {
	font-size: 85%;
}
</style>