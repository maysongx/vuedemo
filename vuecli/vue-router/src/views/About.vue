<template>
	<div class="about">
		<h1>About组件</h1>
		<p>输入数据以后,切换组件,还是可以保存之前数据的数据的,keep-alive</p>
		<input type="text" placeholder="输入数据以后,切换组件,还是可以保存之前数据的数据的"/>
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	props: {
		msg: String
	}
};
</script>
