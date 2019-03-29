<template>
    <div id="app">
        <nav-header></nav-header>
    </div>
</template>

<script>
    import header from './components/Header'
    export default {
        name: 'App',
        components:{
            "nav-header":header
        }
    }
</script>

<style>
    @import  "../static/public.css";
</style>
