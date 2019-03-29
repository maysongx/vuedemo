<template>
	<mt-button @click='handleClick' type='primary'>Test</mt-button>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
	name: 'App',
	data() {
		return {};
	},
	methods:{
		handleClick(){
			Toast('点击了事件')
		}
	}
};
</script>
