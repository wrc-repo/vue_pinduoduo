<!---->
<template>
    <div class="imgs">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of imgs" :key="item.id">
                <img :src="item.img_url" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"SwiperImgs",
    data () {
      return {
          imgs: [
            {
                "id":1,
                "img_url":"http://t00img.yangkeduo.com/goods/images/2019-10-18/762ba429-ed70-4a8a-a997-c88e45923d6a.jpg",
                "title":""
            },
            {
                "id":2,
                "img_url":"http://t00img.yangkeduo.com/goods/images/2019-10-18/ab43b9b8-ce84-4667-bd66-634b107200f9.jpg",
                "title":""
            },
            {
                "id":3,
                "img_url":"http://t00img.yangkeduo.com/goods/images/2019-10-18/81301f43-a9d5-4e36-8077-4f4cdaef325d.jpg",
                "title":""
            },
            {
                "id":4,
                "img_url":"http://t00img.yangkeduo.com/goods/images/2019-10-18/c56ee62e-a085-4b68-a14d-0257c8c72a5e.jpg",
                "title":""
            },
        ],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: true
        }
      };
    }

}

</script>
<style lang='stylus' scoped>
    .goods
        width 100%
        .imgs
            width 100%
            .swiper-container
                height 100%
                .swiper-wrapper
                    width 100%
                    .swiper-slide
                        height 320px
                        img
                            width 100%
                .swiper-pagination
                    text-align left
                    padding-left 88% 
                    color #ffffff
</style>