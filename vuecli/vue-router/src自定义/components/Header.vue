<template>
    <div>
        <!--设置导航-->
        <div class="nav-header">
            <router-link to="/">首页</router-link>
            <router-link to="company">公司介绍</router-link>
            <router-link to="about">关于我们</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "nav-header",
    }
</script>

<style scoped>
    @import "../../static/header.css";
</style>