<!---->
<template>
    <div class="price-title">
        <div class="price">
            <div class="left">
                <span class="cur-price"><i>￥</i>88</span>
                <span class="org-price">￥188</span>
            </div>
            <div class="right">
                已拼9283件
            </div>
        </div>
        <div class="title">
            <span class="_title">棉服女小个子短款连帽带毛领修身2019冬季新款棉袄百搭加厚直销</span><span class="bt">包退运费</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"PriceTitle",
    data () {
        return {
            
        }
    }

}

</script>
<style lang='stylus' scoped>
    .price-title
        width 100%
        padding 10px
        box-sizing border-box
        background-color #ffffff
        .price
            width 100%
            display flex
            justify-content space-between
            align-items flex-end
            .left
                .cur-price
                    font-size 28px
                    color #e02e24
                    font-weight bold
                    i
                        font-size 16px
                .org-price
                    color #58595b
                    text-decoration line-through
            .right 
                color #58595b
                font-size 13px
                margin-bottom 5px
        .title
             padding-top 10px
            ._title
                font-size 15px
                font-weight bold
                line-height 18px
            .bt
                color #ffffff
                background-color #25b513
                border-radius 3px
                padding 0 2px
                margin-left 6px

</style>