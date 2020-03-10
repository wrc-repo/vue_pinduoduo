<!---->
<template>
    <div class="goods">
        <SwiperImgs></SwiperImgs>
        <PriceTitle></PriceTitle>
        <Assemble></Assemble>
        <Comment></Comment>
        <Description></Description>
        <Footer></Footer>
    </div>
</template>

<script>
    document.addEventListener('plusready', function() {
        var webview = plus.webview.currentWebview();
        plus.key.addEventListener('backbutton', function() {
            webview.canBack(function(e) {
                if(e.canBack) {
                    webview.back();
                } else {
                    webview.close(); //hide,quit
                    //plus.runtime.quit();
                }
            })
        });
    });
</script>
<script>
    import SwiperImgs from './goods-components/SwiperImgs'
    import Footer from './goods-components/Footer'
    import PriceTitle from './goods-components/PriceTitle'
    import Assemble from './goods-components/Assemble'
    import Comment from './goods-components/Comment'
    import Description from './goods-components/Description'
    export default {
        name:"Goods",
        components: {
            SwiperImgs,
            PriceTitle,
            Assemble,
            Comment,
            Description,
            Footer
        },
        data () {
            return {
                
            }
        }

    }

</script>

<style lang='stylus' scoped>
    .goods
        background-color #f4f4f4
</style>