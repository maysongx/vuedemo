<template>
    <div class="contact">
        <div class="card text-dark-bg-light mb-3">
            <div class="card-header">联系我们</div>
            <div class="card-body">
                <h4 class="card-title">联系我们</h4>
                <router-link :to="{name:'phoneNumberLink'}">电话</router-link>
                <router-link :to="{name:'personNameLink'}">联系人</router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped>

</style>