<!--
用户评论
	1. 评论列表展示
	2. 删除评论
	3. 新增评论

组件传值
父组件可以将单个数据传递给子组件，也可以将方法传递给子组件

 -->
<template>
	<div class="indexInfo">
		<div class="leftAdd">
			<!-- 将添加用户评论的方法传递给字组件addComment，子组件使用props接收即可直接使用 -->
			<addComment :addCommentMethod="addComment"></addComment>
		</div>
		<div class="rightList"><commentList :commentsListInfo="UserCommentsListInfo" :deleteComment="deleteComment"></commentList></div>
	</div>
</template>

<script>
import addComment from '../components/component-comment/addComment.vue';
import commentList from '../components/component-comment/commentList.vue';
export default {
	name: 'component-comment',
	data() {
		return {
			// 数据在哪个组件里面，操作数据的方法或属性，就在哪个组件里面(初始化数据)
			// 用户评论列表
			UserCommentsListInfo: JSON.parse(localStorage.commentList) || []
		};
	},
	components: { commentList, addComment },
	// mounted() {
	// 	// 初始化方法，将用户评论存储到localStorage
	// 	localStorage.setItem('commentList', JSON.stringify(this.UserCommentsListInfo));
	// },
	methods: {
		// 添加用户评论
		addComment(perCommentObj) {
			this.UserCommentsListInfo.unshift(perCommentObj);
			localStorage.setItem('commentList', JSON.stringify(this.UserCommentsListInfo));
		},

		// 根据index删除评论
		deleteComment(index) {
			this.UserCommentsListInfo.splice(index, 1);
		}
	}
};
</script>

<style lang="scss" scoped>
.indexInfo {
	display: flex;
	width: 1000px;
	margin: 40px auto;
	.leftAdd {
		margin-right: 60px;
	}
}
</style>
