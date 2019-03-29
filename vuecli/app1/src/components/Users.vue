<!--template 搭建html结构-->
<template>
    <!--创建一个容器 class必须与name一样-->
    <div class="users">
        <!--添加用户信息-->
        <form v-on:submit="addUser">
            <label>用户名：</label>
            <input type="text" v-model="newUser.name" placeholder="请输入用户名">
            <label>邮箱：</label>
            <input type="text" v-model="newUser.email" placeholder="输入用户邮箱">
            <input type="submit" value="提交">
        </form>
        <!--展示用户信息-->
        <ul>
            <li v-cloak v-for="perUserItem in users">
                <input type="checkbox" class="toggle" v-model="perUserItem.contacted">
                <span v-bind:class="{contacted:perUserItem.contacted}">
                    {{perUserItem.name}}：{{perUserItem.email}}
                    <button v-on:click="deleteUser(perUserItem)">删除</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<!--script 构建页面逻辑-->
<script>
    export default {
        name: "users",
        //组件里面的data是函数 需要return返回一个对象
        data() {
            return {
                //对象数组 name email contacted
                users: [],
                //中间变量 对象
                newUser: {}
            }
        },
        methods: {
            addUser: function (e) {
                e.preventDefault();
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                });
            },
            deleteUser: function (perUserItem) {
                //通过数组的下标遍历 将数据从数组中移除
                this.users.splice(this.users.indexOf(perUserItem), 1);
            }
        },
        created: function () {
            //请求数据
            this.$http.get('http://jsonplaceholder.typicode.com/users').then(function (response) {
                console.log(response.data);
                this.users = response.data;
            })
        }
    }
</script>

<!--style 书写页面样式-->
<!--scoped 是表示该样式只在此组件内起作用 -->
<style scoped>
    /*防止闪现*/
    [v-cloak]{
        display: none;
    }
    ul, li {
        list-style: none;
    }

    .contacted {
        text-decoration: underline;
        color: red;
    }
</style>