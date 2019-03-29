<template>
	<div class="home">
		<h1>Home组件</h1>
		<ul class="nav nav-tabs">
			<li><router-link :to="{name:'newspage'}">news</router-link></li>
			<li><router-link :to="{name:'messagepage'}">message</router-link></li>
		</ul>

		<router-view></router-view>
	</div>
</template>

<script></script>

<style></style>
