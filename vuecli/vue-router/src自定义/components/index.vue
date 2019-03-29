<!--html结构  有且只有一个根标签-->
<template>
    <div id="home">
        <div class="contentDetails">
            <users></users>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<!--逻辑处理-->
<script>
    import footer from './Footer'
    import Users from './Users'

    export default {
        name: 'home',
        components: {
            "users": Users,
            "nav-footer": footer
        }
    }
</script>

<style scoped>
    @import "../../static/index.css";
</style>
