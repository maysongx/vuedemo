<template>
	<div class="childSlot">
		<slot name="slotTitle"></slot>
		<h3>子组件里面的默认内容，不管是否使用插槽，都会显示</h3>
	</div>
</template>

<script>
export default {
	name: 'childSlot',
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped></style>
