<template>
    <div class="users">
        <h1>我是从App.vue（父组件）接收的数据userName：{{userName}}</h1>
        <h1>我是从App.vue（父组件）接收的数据usersInfo：</h1>
        <ul>
            <li v-for="user in usersInfo" @click="user.show=!user.show">
                <h2>{{user.name}}</h2>
                <h3 v-show="user.show">{{user.position}}</h3>
            </li>
        </ul>
    </div>
</template>
<!--
    传值：string number boolean
    引用：array object
-->

<script>
    export default {
        name: "users",
        //从app.vue获取的参数
        // props:["usersInfo","userName"], //不是很严谨的写法 一般会校验数据类型
        props: {
            usersInfo: {
                type: Array,
                required: true
            },
            userName:{
                type: String,
                required: true
            }
        },
        data: function () {
            return {
            }
        }
    }
</script>

<style scoped>
    .users {
        margin: 20px auto;
    }
</style>