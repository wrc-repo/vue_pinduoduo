<template>
  <div class="header">
      <div class="search-warper">
          <form action="">
              <input type="text" placeholder="9.9包邮">
              <i class="iconfont icon-cx"></i>
          </form>
      </div>
      <div class="navgation">
           <div class="scroll-wrapper" ref="scroll">
                <div class="scroll-content">
                    <!-- <div class="scroll-item" v-for="(item, index) in emojis" :key="index">{{item}}</div> -->
                    <div class="scroll-item" v-for="(item) of navigation" :key="item.id" >{{item.title}}</div>
                    <!-- <div class="scroll-item">女装</div>
                    <div class="scroll-item">鞋包</div>
                    <div class="scroll-item">男装</div>
                    <div class="scroll-item">食品</div>
                    <div class="scroll-item">母婴</div>
                    <div class="scroll-item">手机</div>
                    <div class="scroll-item">百货</div>
                    <div class="scroll-item">内衣</div>
                    <div class="scroll-item">电器</div> -->
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Header",
    data(){
        return {
           
        }
    },
    props: {
        navigation:Array
    },
    mounted() {
        this.init()
    },
    beforeDestroy() {
        this.bs.destroy()
    },
    methods: {
        init() {
            this.bs = new BScroll(this.$refs.scroll, {
            scrollX: true,
            probeType: 3 // listening scroll hook
            })
            this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
            console.log('done')
            })
        },
        _registerHooks(hookNames, handler) {
            hookNames.forEach((name) => {
            this.bs.on(name, handler)
            })
        }
    }
}
</script>

<style lang='stylus' scoped>
    .header
        z-index 999
        position fixed
        top 0
        left 0
        background-color #ed3a58
        width 100%
        .search-warper
            width 100%
            height 50px
            form 
                height 100%
                width 100%
                display flex
                flex-direction column
                justify-content center
                padding 0 15px
                box-sizing border-box
                position relative
                input 
                    margin 0 auto
                    width 100%
                    height 38px
                    border-radius 8px
                    background-color #ededed
                    text-align center
                i  
                    position absolute 
                    top 36%
                    left 36%
        .navgation
            padding 0 15px
            .scroll-wrapper
                margin 0 auto
                white-space nowrap
                border-radius 5px
                overflow hidden
                .scroll-content
                    display inline-block
                .scroll-item
                    height 50px
                    line-height 50px
                    font-size 16px
                    display inline-block
                    text-align center
                    padding 0 10px
                    color #ffd68a
</style>
