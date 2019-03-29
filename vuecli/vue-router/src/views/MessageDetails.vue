<template>
	<div class="messagedetails">
		<h1>{{ $route.params.id }}</h1>
		<ul>
			<li>ID:{{ msgDetails.id }}</li>
			<li>title:{{ msgDetails.title }}</li>
			<li>containt:{{ msgDetails.content }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			msgDetails: {}
		};
	},
	mounted() {
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
		//将newMsg存储在data中
		this.newMsg = newMsg;
		// 数值*1  可以将结果转化为整数
		const curid = this.$route.params.id * 1;
		this.msgDetails = newMsg.find(data => data.id === curid);
	},
	//当需要在数据变化时执行异步或开销较大的操作时,一般是使用监听
	watch: {
		//监视$route
		$route: function(newValue, oldValue) {
			const curid = newValue.params.id * 1;
			this.msgDetails = this.newMsg.find(data => data.id === curid);
		}
	}
};
</script>

<style scoped></style>
