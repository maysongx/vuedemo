<template>
    <div class="home">
        <h1>欢迎进入Pizza点餐系统</h1>
        <button @click="goToMenu" class="btn btn-success">进入菜单页面</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            goToMenu: function () {
                this.$router.push({name: 'menuLink'})

            }
        }
    }
</script>

<style scoped>
</style>