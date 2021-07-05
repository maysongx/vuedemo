<template>
	<div class="vuexdemo">
		<div class="topTab">
			<router-link to="/vuexdemo/addReduce">加1减1 基础版本</router-link>
			<router-link to="/vuexdemo/addReduceVuex">加1减1 vuex版本</router-link>
			<router-link to="/vuexdemo/todoListVuex">vuex之todos练习</router-link>
		</div>
		<div class="bottomCont"><router-view></router-view></div>
	</div>
</template>

<script></script>
<style lang="scss" scoped>
.topTab {
	margin-bottom: 30px;
	a {
		margin: 0 20px;
	}
}

.vuexdemo {
	width: 800px;
	margin: 30px auto;
	text-align: center;
	border: 1px red solid;
	padding: 40px 0;
}
</style>
