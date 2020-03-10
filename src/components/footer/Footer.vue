<template>
    <div class="footer">
        <div class="item" v-for="item of footer" :key="item.id">
            <span class="iconfont" :class="item.class"></span>
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
    props:{
        footer:Array
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .footer
        z-index 999
        position fixed
        bottom 0
        left 0
        height 50px
        border-top 1px solid #eee
        box-sizing border-box
        background-color #ffffff
        width 100%
        display flex
        .item
            flex 1
            text-align center
            overflow hidden 
            display flex
            flex-direction column
            justify-content center
            span 
                display block
                color #666
                font-size 12px
            .iconfont 
                font-size 20px
                padding-bottom 5px


</style>