<!--
功能描述: 组件之间的相互调用以及传值
components组件功能描述
		globalComponent.vue组件：注册的全局组件
		gheader.vue组件：页面头部，演示了案例：从子组件向父组件传值
		gfooter.vue组件：页面尾部
		userList.vue组件：子组件，在APP.vue里面调用
-->

<template>
	<div class="components">
		<!--
				1. 子组件向父组件传值（事件传值）
				v-on:getSubComponentTitle="updateTitle($event)
				getSubComponentTitle  子组件里面注册的事件
				$event 获取子组件里面的参数
		-->
		<gheader v-on:getSubComponentTitle="getTitle($event)"></gheader>
		<!-- 2. 引用一个全局组件 -->
		<globalC></globalC>
		<!--3. 父组件向子组件传值 userName  usersInfo-->
		<userList :userName="userName" :usersInfo="users"></userList>
		<gfooter></gfooter>
	</div>
</template>

<script>
import gheader from '../components/component1/gheader.vue';
import gfooter from '../components/component1/gfooter.vue';
import userList from '../components/component1/userList.vue';
export default {
	name: 'components1',
	data() {
		return {
			userName: 'APP.vue组件里面的数据 userName',
			users: [
				{ name: 'Amy', position: 'web开发', show: false },
				{ name: 'Lucy', position: 'web开发', show: false },
				{ name: 'May', position: 'web开发', show: false },
				{ name: 'Sunny', position: 'web开发', show: false },
				{ name: 'Jack SON', position: 'web开发', show: false },
				{ name: 'Hei', position: 'web开发', show: false }
			]
		};
	},
	components: {
		gheader,
		gfooter,
		userList
	},
	methods: {
		getTitle(title) {
			alert(title);
		}
	}
};
</script>

<style></style>
