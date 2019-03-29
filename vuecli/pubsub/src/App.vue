<template>
	<div id="app"><HelloWorld></HelloWorld></div>
</template>

<script>
// 1. 引入
import PubSub from 'pubsub-js';
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'App',
	components: {
		HelloWorld
	},
	data() {
		return {};
	},
	methods: {
		sayHello(name) {
			alert('你好，' + name);
		}
	},
	mounted() {
		//2. 订阅消息
		PubSub.subscribe('sayHello', (msg, data) => {
			//调用函数 注意是箭头函数
			this.sayHello(data);
		});
	}
};
</script>
