<!---->
<template>
    <div class="main">
        <Top></Top>
        <Seckills></Seckills>
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
    import Top from './seckill-components/Top'
    import Seckills from './seckill-components/Seckills'
    import Footer from './seckill-components/Footer'
    export default {
        name:"Seckill",
        components: {
            Top,
            Seckills,
            Footer
        },
        data () {
            return {
                
            }
        }

    }

</script>
<style lang='stylus' scoped>
    .main
        position relative
</style>