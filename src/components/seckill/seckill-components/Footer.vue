<!---->
<template>
    <div class="footer">
        <div class="item active">
          <span class="iconfont icon-naozhong"></span>
          <span>限时秒杀</span>
        </div>
        <div class="item">
          <span class="iconfont icon-huangguan"></span>
          <span>品牌秒杀</span>
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
        height 50px
        background-color #ffffff
        display flex
        position fixed
        bottom 0px
        left 0px
        width 100%
        border 1px solid #ccc
        align-items center
        .active
            color rgb(223, 48, 26)
        .item
            flex 1
            span 
                display block
                text-align center
            .iconfont 
                padding-bottom 5px
</style>