<template>
    <div class="appHeader">
        <div class="header">
            <div class="logo">
                <img src="../assets/images/logo.png"/>
            </div>
            <ul class="navheader">
                <router-link :to="{name:'Index'}" tag="li">首页</router-link>
                <router-link :to="{name:'Company'}" tag="li">公司介绍</router-link>
                <router-link :to="{name:'About'}" tag="li">关于我们</router-link>
            </ul>
            <div class="loginRegister">
                <router-link :to="{name:'Login'}" tag="span">登录</router-link>
                <router-link :to="{name:'Register'}" tag="span">注册</router-link>
            </div>
            <div class="clear"></div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "appHeader",
        data() {
            return {
                isActive: true
            }
        },
        methods: {
            setHeaderActive: function () {
                alert('ok');
            }
        }
    }
</script>

<style>
    @import "../assets/css/appHeader.css";
</style>