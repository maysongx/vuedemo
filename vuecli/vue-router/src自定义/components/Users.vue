<template>
    <div class="users">
        <ul>
            <li v-for="user in usersInfo">
                <h2>{{user.username}}=={{user.phone}}</h2>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "users",
        data: function () {
            return {
                usersInfo: []
            }
        },
        created: function () {
            //请求http数据  http://jsonplaceholder.typicode.com/users
            this.$http.get('http://jsonplaceholder.typicode.com/users').then(function (response) {
                console.log(response.data);
                this.usersInfo = response.data;
            });
        }
    }
</script>

<style scoped>
</style>