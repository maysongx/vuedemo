<template>
    <div id="app">
        <div class="topTitle">请发表对Vue的评论</div>
        <div class="cont">
            <!--将addComment函数传递到组件List.vue中-->
            <Add :addComment="addComment"/>
            <!--将comments数组传递到组件List.vue中-->
            <List :comments="comments" :deleteComment="deleteComment"/>
        </div>
    </div>
</template>

<script>
    import Add from './components/Add'
    import List from './components/List'

    export default {
        name: "app",
        data() {
            return {
                //判断comments数据放在哪个组件里面，主要是判断它是单独的一个组件使用的数据，还是某些组件共用的数据
                //数据在那个组件里面，操作数据的方法或属性，就在哪个组件里面
                comments: [
                    {
                        name: 'Amy',
                        content: '这个网站真不错呀'
                    },
                    {
                        name: 'Sunny',
                        content: '这个网站真不错呀22222'
                    },
                    {
                        name: 'Coco',
                        content: '这个网站真不错哈哈哈'
                    }
                ]
            }
        },
        components: {
            Add, List
        },
        methods: {
            //将评论的对象添加到数组comments中
            addComment(comment) {
                //添加到数组的末尾：this.comments.push(comment);
                //添加到数据的开头
                this.comments.unshift(comment);
            },
            //删除指定的评论 根据index
            deleteComment(index){
                this.comments.splice(index,1);
            }
        }

    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }

    .topTitle {
        background-color: gray;
        color: white;
        text-align: center;
        font-size: 40px;
        padding: 40px;
    }

    .cont {
        width: 900px;
        margin: 0 auto;
    }
</style>