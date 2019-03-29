<template>
	<div class="container">
		<div class="row"><h1>Router Basic-01</h1></div>
		<div class="row">
			<div class="col-xs-4">
				<div class="list-group">
					<router-link class="list-group-item" to="/home">home</router-link>
					<router-link class="list-group-item" to="/about">about</router-link>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<keep-alive><router-view msg='我是通过router-view传递过来的属性'></router-view></keep-alive>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {};
	}
};
</script>

<style>
.curActiveClass {
	color: red !important;
}
</style>
