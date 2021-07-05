<template>
	<div class="commentList">
		<h2 v-show="commentsListInfo.length == 0">暂无任何评论，请添加评论吧</h2>
		<div class="list" v-for="(item, index) in commentsListInfo" :key="index"><itemComment :item="item" :index="index" :deleteComment="deleteComment"></itemComment></div>
	</div>
</template>

<script>
import itemComment from './itemComment.vue';
export default {
	name: '',
	props: {
		commentsListInfo: {
			type: Array
		},
		deleteComment: {
			type: Function
		}
	},
	data() {
		return {};
	},
	components: {
		itemComment
	}
};
</script>

<style scoped></style>
