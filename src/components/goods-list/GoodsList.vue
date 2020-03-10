<!---->
<template>
    <div class="goodslist">
        <router-link to="/goods" tag="div" class="item" v-for="item of goodslist" :key="item.id">
            <div class="left">
                <img :src="item.imgurl" alt="">
            </div>
            <div class="right">
                <div class="title">
                    {{item.title}}
                </div>
                <div class="price-and-user">
                    <div class="price">
                        <span class="_price"> <i>￥</i>{{item.price}}</span>
                        <span class="sell-num">已拼{{item.sell_num}}万+件</span>
                    </div>
                    <div class="user">
                        <img src="http://t20img.yangkeduo.com/a/cb7a9153976ffd8209717611aecb9c14562e3e51-1575983317?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp" alt="">
                        <img class="user_second" src="http://t20img.yangkeduo.com/a/7a1cb5b61e037a2c3e5c1f98746f396ca8405189-1540473064?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp" alt="">
                    </div>
                </div>
                <div class="line"></div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"GoodsList",
    props:{
        goodslist:Array
    },
    data () {
        return {
            
        }
    }

}

</script>
<style lang='stylus' scoped>
    .goodslist
        width 100%
        margin-top 10px
        background-color #fff
        .item
            padding 6px 12px 0px
            display flex
            .left
                width 132px
                heigh 132px
                img 
                    width 100%
                    height 100%
            .right
                position relative
                flex 1
                display flex
                flex-direction column
                justify-content space-between
                padding 5px 1px 5px 5px
                .line
                    position absolute
                    bottom -10px
                    right 0px
                    width 199px
                    height 0
                    border-bottom 1px  solid rgba(0,0,0,.05)
                .title
                    font-size 14px
                    color #151516
                    line-height 18px
                    height 34px
                    overflow hidden
                    letter-spacing 1px
                .price-and-user
                    width 100%
                    height 28px
                    display flex
                    align-items flex-end
                    justify-content space-between
                    .price
                        color #9c9c9c
                        padding 0px
                        line-height 18px
                        display flex
                        justify-content flex-start
                        .sell-num
                            font-size 13px
                        ._price
                            color #e02e24
                            font-size 18px
                            margin-right 5px
                            font-weight bold
                            i 
                                font-size 10px
                    .user
                        display flex
                        justify-content flex-end
                        img 
                            width 24px
                            height 24px
                            border-radius 50%
                            margin-left 0
                        .user_second
                            margin-left -12px
</style>