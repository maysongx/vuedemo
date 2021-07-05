<!--
配置全局组件

1.  加载一个全局组件
import globalComponent from './components/component1/globalComponent.vue'

// 2. 注册一下全局组件
Vue.component('globalC', globalComponent)

-->
<template>
	<div class="globalComponent"><h3>我是global.vue组件：注册的全局组件，可以在任意组件里面使用</h3></div>
</template>

<script>
export default {
	name: 'globalComponent',
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped></style>
