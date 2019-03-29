<template>
	<div class="hello"><button @click="cursayHello">点击问候一下吧</button></div>
</template>

<script>
// 引入
import PubSub from 'pubsub-js';
export default {
	name: 'HelloWorld',
	data() {
		return {};
	},
	methods: {
		cursayHello() {
			//发布消息：使用App.vue的回调函数sayHello
			PubSub.publish('sayHello', '我是参数');
		}
	}
};
</script>
