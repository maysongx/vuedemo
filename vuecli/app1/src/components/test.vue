<template>
    <div class="test">
        <!--获取数据-->
        <h1>{{title}}</h1>
        <p>{{userObj.firstName}}</p>
        <p v-text="userObj.lastName"></p>
        <!--v-if v-else 判断-->
        <p v-if="showName">{{userObj.firstName}}</p>
        <p v-else="showName">no name</p>
        <!--v-for 列表循环-->
        <p v-for="m in array">{{m}}+"::::::"+{{m.title}}</p>
        <!--v-on 事件-->
        <button v-on:click="greet">点击问候</button>
        <button v-on:click="greet1('哈哈哈')">点击问候(有参数)</button>
        <!--v-on:keyup.enter 键盘enter事件-->
        <p>键盘事件</p>
        <input type="text" v-model="title" v-on:keyup="showMsg" v-on:keyup.enter="showMsg2"/>
        <p>computed 计算属性</p>
        <label>FirstName:</label>
        <input type="text" v-model="userObj.firstName">
        <br/>
        <label>LastName:</label>
        <input type="text" v-model="userObj.lastName">
        <br/>
        <!--计算属性-->
        {{fullName}}
        <br>
        <!--props属性-->
        <h1>{{msg}}</h1>
    </div>

</template>

<script>
    export default {
        name: "test", //容器元素
        data() {
            return {
                //字符串
                title: '我是测试标题',
                //对象
                userObj: {
                    firstName: "xia",
                    lastName: "song"
                },
                //布尔值
                showName: false,
                //数组
                array: [
                    {'title': 'item1'},
                    {'title': 'item2'},
                    {'title': 'item3'},
                    {'title': 'item4'},
                    {'title': 'item5'}
                ]
            }
        },
        methods: {
            greet: function () {
                alert('Hello World !');
            },
            greet1: function (params) {
                alert(params);
            },
            showMsg: function () {
                console.log(this.title)
            },
            showMsg2: function () {
                console.log('触发了enter事件')
            }
        },
        computed: {
            fullName: function () {
                return this.userObj.lastName + " " + this.userObj.firstName;
            }
        },
    }
</script>

<style scoped>

</style>