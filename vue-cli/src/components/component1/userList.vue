<template>
	<div class="userList" style="background-color: rgb(192 202 191)">
		<h1>此案例是：父组件(components1.vue)向子组件(userList.vue)传值的demo</h1>
		<h3>userName，usersInfo是父组件里面的数据，子组件使用props接收数据，可以直接使用</h3>
		<br />
		<h3>接收数据userName: {{ userName }}</h3>

		<h3>接收数据usersInfo</h3>
		<ul>
			<li v-for="(user, index) in usersInfo" :key="index">
				姓名：{{ user.name }}
				<br />
				职位：{{ user.position }}
			</li>
		</ul>
	</div>
</template>

<script>
// props接收的数据类型:String Number Boolean Array Object Date Function Symbol

export default {
	name: 'userList',
	props: {
		userName: {
			type: String,
			required: true
		},
		usersInfo: {
			type: Array,
			required: true
		}
	},
	data() {
		return {};
	}
};
</script>

<style scoped>
.users {
	margin: 20px auto;
}
</style>
