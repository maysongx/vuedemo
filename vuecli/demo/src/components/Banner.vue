<template>
    <div class="banner">
        <h1 ref="cont" @click="getValue">你好</h1>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <a  class="swiper-slide" :href="item.link"  :style='{"background":`url(${item.bgimg}) 0px 0px no-repeat`}'  :alt="item.alt"
                     v-for="item in banner">
                </a>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import '../assets/lib/swiper/css/swiper.min.css'
    export default {
        name: "banner",
        data() {
            return {
                banner: [
                    {
                        bgimg: require('../assets/images/banner/b1.jpg'),
                        link: 'http://www.baidu.com',
                        alt: '第一张图片'
                    },
                    {
                        bgimg: require('../assets/images/banner/b2.jpg'),
                        link: 'http://www.baidu.com',
                        alt: '第二张图片'
                    },
                    {
                        bgimg: require('../assets/images/banner/b3.jpg'),
                        link: 'http://www.baidu.com',
                        alt: '第三张图片'
                    }
                ]
            }
        },
        methods: {
            initSwiper: function () {
                var mySwiper = new Swiper('.swiper-container', {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                })

            },
            getValue:function () {
                alert(this.$refs.cont.textContent);
            }
        },
        mounted: function () {
            this.initSwiper();
        }
    }
</script>

<style>
    @import "../assets/css/banner.css";
</style>