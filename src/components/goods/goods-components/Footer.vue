<!---->
<template>
    <div class="footer">
        <div class="left">
            <div class="item">
                <span class="iconfont icon-gengduo"></span>
                <span>更多</span>
            </div>
            <div class="item">
                <span class="iconfont icon-shoucang"></span>
                <span>收藏</span>
            </div>
            <div class="item">
                <span class="iconfont icon-kefu"></span>
                <span>客服</span>
            </div>
        </div>
        <div class="right">
            <div class="price-box box-one">
                <span class="price">￥108</span>
                <span>单独购买</span>
            </div>
            <div class="price-box">
                <span class="price">￥88</span>
                <span>发起拼单</span>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name:"Footer",
    data () {
        return {
            
        }
    }

}

</script>
<style lang='stylus' scoped>
    .footer
        position absolute
        z-index 999
        background-color #ffffff
        position fixed
        bottom 0
        left 0
        width 100%
        height 54px
        display flex
        // border-top 1px solid #ccc
        .left
            flex 2
            display flex
            .item
                flex 1
                text-align center
                display flex
                flex-direction column
                justify-content center
                color #58595b
                span 
                    display block  
                    font-size 12px
                .iconfont
                    font-size 24px
                    padding-bottom 5px
        .right  
            flex 3
            display flex 
            .price-box
                flex 1
                text-align center
                display flex
                flex-direction column
                justify-content center
                background-color #e02e24
                color #ffffff
                span 
                    display block
                .price
                    padding-bottom 5px
            .box-one
                background-color #f3aba7
</style>