<!---->
<template>
    <div class="description">
        <div class="title">
            商品详情
        </div>
        <div class="attr">
            <div class="item first-item">
                <span class="attr_name">品牌</span>
                <span class="attr_value">哲梦琪</span>
            </div>
            <div class="item">
                <span class="attr_name">服装版型</span>
                <span class="attr_value">宽松</span>
            </div>
            <div class="item">
                <span class="attr_name">衣长</span>
                <span class="attr_value">常规款</span>
            </div>
            <div class="item">
                <span class="attr_name">填充物</span>
                <span class="attr_value">其他</span>
            </div>
            <div class="item">
                <span class="attr_name">适用年龄</span>
                <span class="attr_value">中青年（26-40周岁）</span>
            </div>
            <div class="item">
                <span class="attr_name">是否带毛领</span>
                <span class="attr_value">是</span>
            </div>
        </div>
        <div class="desc-imgs">
            <li><img src="http://t00img.yangkeduo.com/goods/images/images/2019-09-26/36dc8bd3-dac4-46ab-a3d4-9cbb53047035.jpg?imageMogr2/quality/70" alt=""></li>
            <li><img src="http://t00img.yangkeduo.com/goods/images/images/2019-09-26/ad174465-7ff7-4314-abed-137503fda90a.jpg?imageMogr2/quality/70" alt=""></li>
            <li><img src="http://t00img.yangkeduo.com/goods/images/images/2019-09-26/b4b81524-fb40-4f1a-85b5-a6ebbae3ad9a.jpg?imageMogr2/quality/70" alt=""></li>
        </div>
    </div>
</template>

<script>
export default {
    name:"Description",
    data () {
        return {
            
        }
    }

}

</script>
<style lang='stylus' scoped>
    .description
        width 100%
        padding 5px
        box-sizing border-box
        background-color #ffffff
        margin-top 10px
        .title
            font-size 14px
        .attr
            margin-top 10px
            background-color #f4f4f4
            padding 10px
            border-radius 5px
            .item
                margin-top 10px
                display flex
                .attr_name
                    flex 3
                .attr_value
                    flex 7

            .first-item
                margin 0px
        .desc-imgs
            height 500px
            li
                list-style none
                img 
                    width 100%
</style>