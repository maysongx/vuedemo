<template>
    <ul class="rightInfo">
        <h2 v-show="comments.length==0">暂无任何评论，请添加评论吧</h2>
        <item v-for="(perCommentObj,index) in comments" :perCommentObj="perCommentObj" :index="index" :key="index"
              :deleteComment="deleteComment"/>
    </ul>
</template>

<script>
    import Item from './Item'

    export default {
        name: "list",
        props: ['comments', 'deleteComment'],
        data() {
            return {}
        },
        components: {
            Item
        }
    }
</script>

<style scoped>
    /*右侧样式*/
    .rightInfo {
        float: left;
        width: 500px;
    }


</style>