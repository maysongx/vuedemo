<!--html结构  有且只有一个根标签-->
<template>
    <div id="app">
        <!--
        1. 子组件向父组件传值（事件传值）
        v-on:changedTitle2="updateTitle($event)
        changedTitle2  子组件里面注册的事件
        $event 获取子组件里面的参数
        -->
        <app-header v-on:changedTitle2="updateTitle($event)"></app-header>
        <!--2. 加载全局组件 注册声明在main.js-->
        <globalCompoent></globalCompoent>
        <!--3. 父组件向子组件传值-->
        <users :usersInfo="users" :userName="userName"></users>
        <app-footer></app-footer>
    </div>
</template>

<!--逻辑处理-->
<script>
    import Header from './components/Header'
    import Footer from './components/Footer'
    import Users from './components/Users'

    export default {
        name: 'app',
        data: function () {
            return {
                title: "这是我的第一个Vue.js脚手架项目！",
                userName: '我是String类型数据，用来传值到子组件Users',
                users: [
                    {name: "SongXia", position: "web开发", show: false},
                    {name: "SongXia", position: "web开发", show: false},
                    {name: "SongXia", position: "web开发", show: false},
                    {name: "SongXia", position: "web开发", show: false},
                    {name: "SongXia", position: "web开发", show: false},
                    {name: "SongXia", position: "web开发", show: false}
                ]
            }
        },
        methods: {
            updateTitle: function (ee) {
                alert(ee);
            }
        },
        components: {
            //注册声明组件
            "users": Users,
            "app-header": Header,
            "app-footer": Footer
        }
    }
</script>

<!--样式-->
<style>
    #app {
        width: 100%;
        margin: 0;
        padding: 0;
        position: relative;
        display: block;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    body, .header, .footer {
        padding: 0px;
        margin: 0px;
    }

    .footer, .header {
        width: 100%;
        margin: 0;
        padding: 0;
        position: relative;
        display: block;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: white;
        text-align: center;
        background-color: #333;
    }

    h1 {
        padding: 0;
        margin: 0;
    }
</style>
