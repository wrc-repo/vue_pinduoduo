<!---->
<template>
    <div class="top">
        <div class="item active">
            <span>正在疯抢</span>
        </div>
        <div class="item">
            <span>即将开抢</span>
        </div>
        <div class="item">
            <span>明日预告</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"Top",
    data () {
        return {
            
        }
    }

}

</script>
<style lang='stylus' scoped>
    .top 
        z-index 999
        width 100%
        background-color #ffffff
        position fixed
        top 0px
        left 0px
        display flex
        height 35px
        line-height 35px
        .item
            flex 1
            text-align center
            span 
                padding 0px 4px 6px
                color #444444
                font-size 15px
                font-weight bold
        .active
            color rgb(223, 48, 26)
            span 
                border-bottom 2px solid rgb(223, 48, 26)
                color rgb(223, 48, 26)
</style>