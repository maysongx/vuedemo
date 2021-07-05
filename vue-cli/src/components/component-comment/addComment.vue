<template>
	<div class="addComment">
		<div class="perItem">
			<div class="tag">用户名</div>
			<input type="text" class="username" placeholder="请输入用户名" v-model="username" />
		</div>
		<div class="perItem">
			<div class="tag">评论内容</div>
			<textarea class="content" placeholder="请输入评论内容" v-model="content"></textarea>
		</div>
		<div class="btnAddComment" @click="addUserComment">提交</div>
	</div>
</template>

<script>
export default {
	name: '',
	props: {
		// 父组件component-comment.vue里面的函数 添加用户评论，参数是对象
		addCommentMethod: {
			type: Function
		}
	},
	data() {
		return {
			username: '',
			content: ''
		};
	},
	methods: {
		/*
		 * 1. 检查用户输入的数据的合法性
		 * 2. 根据输入的数据，封装成功一个comment对象
		 * 3. 将newComment对象添加到comments数组中
		 * 4. 清除输入
		 * */

		addUserComment() {
			const { username, content } = this;
			if (!username || !content) {
				alert('输入的数据有问题，请检查重新输入！');
				return;
			}
			// 封装一个用户评论对象
			const newCommentObj = {
				name: username,
				content
			};
			this.addCommentMethod(newCommentObj);

			// 清空输入框数据
			this.username = '';
			this.content = '';
		}
	}
};
</script>

<style lang="scss" scoped>
.addComment {
	width: 100%;
	position: relative;
	.perItem {
		display: flex;
		margin-bottom: 20px;
		.tag {
			width: 80px;
			text-align: right;
			margin-right: 20px;
		}
		.username,
		.content {
			width: 250px;
			outline: none;
			box-sizing: border-box;
			border: 1px #ccc solid;
			border-radius: 5px;
		}
		.username {
			height: 30px;
			line-height: 30px;
			padding: 0 6px;
		}
		.content {
			height: 100px;
		}
	}
	.btnAddComment {
		width: 80px;
		height: 30px;
		background: #b9b9b8;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
		border-radius: 6px;
		float: right;
	}
}
</style>
