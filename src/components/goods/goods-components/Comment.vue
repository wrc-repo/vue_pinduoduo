<!---->
<template>
    <div class="comment">
        <div class="title">
            <span>商品评价(2850)</span>
            <span class="more">查看更多<i class="iconfont icon-arr-right"></i></span>
        </div>
        <div class="content">
            <div class="yinxiang">
                <span>质量很好(172)</span>
                <span>颜色好看(160)</span>
                <span>衣服不错(153)</span>
                <span>款式新颖(124)</span>
                <span>值得购买(999+)</span>
            </div>
            <div class="comments">
                <div class="item">
                    <div class="user">
                        <div class="avatar">
                            <img src="http://t20img.yangkeduo.com/a/29812e58660a6d6962a1a5d3cf01486214d803a4-1564225100?imageMogr2/thumbnail/100x" alt="">
                        </div>
                        <div class="uname">
                            周杰伦
                        </div>
                    </div>
                    <div class="comment-content">
                        衣服已经收到了，摸起来很舒服，不掉色，版型好，没有色差，显瘦 很不错喜欢😊
                    </div>
                </div>

                <div class="item">
                    <div class="user">
                        <div class="avatar">
                            <img src="http://t20img.yangkeduo.com/a/9b4fb704ef489e399ee429589bb0b410e0ba1552-1558789867?imageMogr2/thumbnail/100x" alt="">
                        </div>
                        <div class="uname">
                            习大大
                        </div>
                    </div>
                    <div class="comment-content">
                        衣服已经收到了
                    </div>
                </div>

                <div class="item">
                    <div class="user">
                        <div class="avatar">
                            <img src="http://t20img.yangkeduo.com/a/9b4fb704ef489e399ee429589bb0b410e0ba1552-1558789867?imageMogr2/thumbnail/100x" alt="">
                        </div>
                        <div class="uname">
                            特朗普
                        </div>
                    </div>
                    <div class="comment-content">
                        很好看很喜欢
                    </div>
                </div>

                <div class="item">
                    <div class="user">
                        <div class="avatar">
                            <img src="http://t20img.yangkeduo.com/a/de22f2e3a91d1b73d7cf28439cc5a9223d082dcd-1541848384?imageMogr2/thumbnail/100x" alt="">
                        </div>
                        <div class="uname">
                            奥巴马
                        </div>
                    </div>
                    <div class="comment-content">
                        very good
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Comment",
    data () {
        return {
            
        }
    }

}

</script>
<style lang='stylus' scoped>
    .comment
        margin-top 10px
        width 100%
        background-color #ffffff
        .title
            display flex
            justify-content space-between
            border-bottom 1px solid #f2f2f2
            padding 0 10px
            height 38px
            line-height 38px
            font-size 15px
            .more
                color #9c9c9c
                font-size 13px
        .content
            width 100%
            box-sizing border-box
            padding-left 15px
            .yinxiang
                font-size 14px
                display flex
                flex-wrap wrap 
                span 
                    color #58595B
                    background-color #FDEFEE
                    margin 10px 10px 0 0 
                    padding 8px
                    border-radius 5px
            .comments
                width 100%
                margin-top 10px
                .item
                    width 100%
                    margin-top 10px
                    .user
                        width 100%
                        height 30px
                        display flex
                        align-items center
                        .avatar
                            height 30px
                            width 30px
                            margin-right 10px
                            img 
                                width 100%
                                border-radius 50%
                    .comment-content
                        margin-top 8px
                        color #58595b
                        font-size 14px
                        line-height 18px
                        padding-bottom 6px
                        border-bottom 1px solid #f2f2f2
</style>