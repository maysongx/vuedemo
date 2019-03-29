<template>
    <div class="company">
        <h1>你好，欢迎您访问我们公司，今天是{{date|nowDate}}</h1>
        <h1 ref="val" @click="getValue">点击获取公司介绍详细信息</h1>
    </div>
</template>

<script>
    export default {
        name: "company",
        data() {
            return {}
        },
        directives: {
            'nowDate':function (el,binding) {
                
            }
        },

        methods: {
            getValue() {
                alert(this.$refs.val);
            }
        }
    }
</script>

<style scoped>

</style>