<template>
    <div class="company">
        <div class="contentDetails">
            <h1>公司介绍</h1>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import footer from './Footer'
    export default {
        name: "company",
        components:{
            "nav-footer":footer
        }
    }
</script>
