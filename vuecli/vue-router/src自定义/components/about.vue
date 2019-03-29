<template>
    <div class="about">
        <div class="contentDetails">
            <h1>关于我们</h1>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>

    import footer from './Footer'

    export default {
        name: "about",
        components: {
            "nav-footer": footer
        }
    }
</script>