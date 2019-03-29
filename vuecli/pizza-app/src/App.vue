<template>
    <div id="app">
        <div class="container">
            <appHeader></appHeader>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'

    export default {
        name: 'app',
        components: {
            'appHeader': Header
        }
    }
</script>

<style>

</style>
