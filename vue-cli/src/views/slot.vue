<template>
	<div class="slot">
		<childSlot>
			<h1 slot="slotTitle">使用子组件里面的插槽 slot="slotTitle"</h1>
		</childSlot>
	</div>
</template>

<script>
import childSlot from '../components/slot/child-slot.vue';
export default {
	name: 'slot',
	data() {
		return {};
	},
	components: {
		childSlot
	}
};
</script>

<style lang="scss" scoped></style>
