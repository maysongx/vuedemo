<!--
 ajax请求之vue-resource

1.  下载安装 npm i vue-resource

2.  main.js 配置使用
		// 引入模块 vue-resource
		import VueResource from 'vue-resource';

		// 使用插件
		Vue.use(VueResource);
 -->

<template>
	<div class="vue-resource">
		<h1 v-if="!repoUrl">数据正在请求中......</h1>
		<h1 v-else>
			Most start repo is
			<a :href="repoUrl">{{ repoName }}</a>
		</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			repoUrl: '',
			repoName: ''
		};
	},
	// 页面初始化执行
	mounted() {
		// 通过 vue/组件对象发送 ajax 请求
		// 接口获取github上面星最多的项目
		const url = 'https://api.github.com/search/repositories?q=vu&sort=stars';
		this.$http
			.get(url)
			.then(response => {
				// 数据请求成功
				const dataObj = response.data.items[0];
				this.repoUrl = dataObj.html_url;
				this.repoName = dataObj.name;
			})
			.catch(error => {
				// 数据请求失败
				console.log(error);
			});
	}
};
</script>

<style lang="scss" scoped></style>
