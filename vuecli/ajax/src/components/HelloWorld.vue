<template>
	<div class="hello">
		<slot name="xxx">不确定的标签结构 1</slot>
		<div>组件确定的标签结构</div>
		<slot name="yyy">不确定的标签结构 2</slot>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {};
	}
};
</script>
