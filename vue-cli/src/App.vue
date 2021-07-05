<template>
	<div id="app">
		<h1>功能列表导航</h1>
		<div class="navList">
			<router-link to="/">首页</router-link>
			<router-link to="/AjaxVueResource">ajax请求之vue-resource</router-link>
			<router-link to="/AjaxAxios">ajax请求之axios</router-link>
			<router-link to="/components1">components1基础组件间的传值应用</router-link>
			<router-link to="/componentComment">components-commint组件传值demo</router-link>
			<router-link to="/componentTodolist">components-todolist</router-link>
			<router-link to="/slot">slot插槽</router-link>
			<router-link to="/pubsub">pubsub消息的订阅和发布</router-link>
			<router-link to="/vuexdemo">vuex案例</router-link>
		</div>
		<div class="mainCont"><router-view /></div>
	</div>
</template>

<style lang="scss">
#app {
	width: 90%;
	margin: 0 auto;
}
.navList {
	display: flex;
	margin-bottom: 20px;
	flex-wrap: wrap;
	a {
		margin: 10px;
		font-size: 16px;
	}
}
</style>
