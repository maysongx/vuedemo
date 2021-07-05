<template>
	<div class="itemComment">
		<div class="userName">{{ item.name }}:</div>
		<div class="cont">{{ item.content }}</div>
		<div class="btn-delete" @click="deleteCommentItem(index)">删除</div>
	</div>
</template>

<script>
export default {
	name: 'itemComment',
	props: {
		item: {
			type: Object
		},
		deleteComment: {
			type: Function,
			required: true
		}
	},
	data() {
		return {};
	},
	methods: {
		// 删除评论项 根据index
		deleteCommentItem(index) {
			if (window.confirm('确定要删除这个评论吗？')) {
				this.deleteComment(index);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.itemComment {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px #e0d9d9 solid;
	padding: 15px 10px;
	.cont {
		margin: 0 25px 0 15px;
	}
	.btn-delete {
		cursor: pointer;
		color: royalblue;
	}
}
</style>
