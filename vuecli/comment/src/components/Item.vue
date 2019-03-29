<template>

    <li>
        <div class="userName">{{perCommentObj.name}}说</div>
        <button @click="deleteItem(index)">删除{{index}}</button>
        <div style="clear: both"></div>
        <div class="content">{{perCommentObj.content}}</div>
    </li>

</template>

<script>
    export default {
        name: "item",
        props: {
            index: Number,
            perCommentObj: {
                type: Object
            },
            deleteComment: {
                type: Function,
                required: true
            }
        },
        methods: {
            deleteItem(index) {
                const {perCommentObj} = this;
                if (window.confirm(`确定要删除${perCommentObj.name}的评论吗？`)) {
                    this.deleteComment(index);
                }
            }
        }
    }
</script>

<style scoped>
    .rightInfo li {
        list-style-type: none;
        border: 1px #9c9696 solid;
        margin-bottom: -1px;
        width: 500px;
        padding: 10px 20px;
    }

    .rightInfo .userName {
        float: left;
        font-weight: bold;
    }

    .rightInfo button {
        float: right;
    }
</style>