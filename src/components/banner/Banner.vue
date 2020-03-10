<!---->
<template>
    <div class="banner">
            <swiper :options="swiperOption">
            <swiper-slide v-for="item of banner" :key="item.id">
                <img :src="item.imgurl" alt="item.title">
            </swiper-slide>
            <!-- <swiper-slide>
                <img src="https://t16img.yangkeduo.com/img_check/2019-12-30/4a6afe9c4a6b2c6bd529e56303256c4b.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="https://t00img.yangkeduo.com/goods/2019-11-20/0c7cbcf6a07241f8ac9feea5002a498e.jpeg" alt="">
            </swiper-slide> -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"Banner",
    data () {
        return {

            swiperOption: {
                spaceBetween: 30,
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
       }
    },
    props: {
        banner:Array
    }
}

</script>
<style lang='stylus' scoped>
    .banner
        width 100%
        .swiper-container
            width 100%
            .swiper-wrapper
                width 100%
                .swiper-slide
                    width 100%
                    img 
                        width 100%
            .swiper-pagination
                left 40%
            .swiper-pagination >>> .swiper-pagination-bullet 
                background #ffffff    
                opacity 1
            .swiper-pagination >>> .swiper-pagination-bullet-active
                background #e02e24 
</style>