<template>
    <div id="app">
        <Users></Users>
    </div>
</template>

<script>
    // 1. 引入组件
    import test from './components/test'
    import Users from  './components/Users'

    export default {
        name: 'App',
        components: {
            test, //2. 初始化组件
            Users
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
