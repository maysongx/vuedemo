<template>
    <h1 class="header">
        <h1 @click="changedTitle">{{title}}</h1>
    </h1>
</template>

<script>
    export default {
        name: "app-header",
        data: function () {
            return {
                title: "页面头部"
            }
        },
        methods: {
            changedTitle: function () {
                //注册事件changedTitle2
                this.$emit('changedTitle2', '我是子组件向父组件传送的内容');
            }
        },
    }
</script>

<style scoped>
</style>