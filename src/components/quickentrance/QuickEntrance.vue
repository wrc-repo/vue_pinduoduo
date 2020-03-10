<!---->
<template>
    <div class="quickentrance">
        <swiper :options="swiperOption">
            <swiper-slide>
                <template v-for="item of quickentrance">
                    <template v-if="item.id <= 10">
                        <router-link tag="div" class="item" :key="item.id" :to="item.to_url">
                            <img :src="item.imgurl" alt="">
                            <span>{{item.title}}</span>
                        </router-link>
                    </template>
                </template>
            </swiper-slide>
            <swiper-slide>
                <template v-for="item of quickentrance">
                    <template v-if="item.id > 10">
                        <router-link tag="div" class="item" :key="item.id"  :to="item.to_url">
                            <img :src="item.imgurl" alt="">
                            <span>{{item.title}}</span>
                        </router-link>
                    </template>
                </template>
            </swiper-slide>
            <div class="swiper-scrollbar"  slot="scrollbar"></div>
      </swiper>
    </div>
</template>

<script>
export default {
    name:"QuickEntrance",
    props :{
        quickentrance: Array
    },
    data () {
        return {
            swiperOption: {
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false
                }
            }
        }
    }
}

</script>
<style lang='stylus' scoped>
    .quickentrance
        width 100%
        background url("https://t00img.yangkeduo.com/goods/2020-03-05/397f2521a4cf7564a09f6243860030be.jpeg") center center no-repeat
        .swiper-wrapper
            width 100%
            .swiper-slide
                width 100%
                display flex
                flex-wrap wrap
                .item
                    width 20%
                    box-sizing border-box
                    padding 5px
                    display flex
                    flex-direction column
                    justify-content center
                    img 
                        height 43px
                        width 43px
                        display block
                        margin 0 auto
                    span 
                        display block
                        text-align center
                        color #fff
                        padding-top 5px
                        font-size 12px
        .swiper-scrollbar
            width 30%
            margin 0 auto
            position static 
            .swiper-scrollbar-drag
                background-color #ff6969 !important
</style>