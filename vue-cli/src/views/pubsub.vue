<!--
消息的订阅与发布，需要安装PubSubJS库,可以实现任意组件之间的通信
    安装：npm install --save-dev pubsub-js
如果安装成功，可以查看信息 npm info pubsub-js

绑定事件监听--订阅消息
触发事件--发布消息

订阅消息：PubSub.subscribe('事件名',function(msg,data){})  data就是参数
发布消息：PubSub.publish('事件名',data)
-->
<template>
	<div class="pubsub">
		<h1>使用了element-ui组件库</h1>
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>

		<search></search>
		<userMain></userMain>
	</div>
</template>

<script>
import search from '../components/pubsub/search.vue';
import main from '../components/pubsub/main.vue';
export default {
	name: 'pubsub',
	data() {
		return {};
	},
	components: {
		search,
		userMain: main
	}
};
</script>

<style lang="scss" scoped></style>
