<template>
  <div class="index">
    <Header :navigation = "navigation"></Header> 
    <div class="content">
        <Banner :banner = "banner"></Banner>
        <QuickEntrance :quickentrance = "quickentrance"></QuickEntrance>
        <GoodsList :goodslist = "goodslist"></GoodsList>
    </div>
    <Footer :footer = "footer"></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Banner from '@/components/banner/Banner'
import QuickEntrance from '@/components/quickentrance/QuickEntrance'
import GoodsList from '@/components/goods-list/GoodsList'

export default {
  name: 'Index',
  components: {
    Header,
    Footer,
    Banner,
    QuickEntrance,
    GoodsList
  },
  data () {
    return {
      navigation:[],
      banner:[],
      quickentrance:[],
      goodslist:[],
      footer:[]
    }
  },
  methods: {
      getIndexData(){
          axios.get('http://192.168.1.104:3000/data')
          .then(this._getIndexData);
      },
      _getIndexData(res){
        //   console.log(res);
          this.navigation = res.data.data.navigation
          this.banner = res.data.data.banner
          this.quickentrance = res.data.data.quickentrance
          this.goodslist = res.data.data.goodslist
          this.footer = res.data.data.footer
      }
  },
  mounted () {
      this.getIndexData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .index
        background-color  #f4f4f4
        .content
            z-index 100
            width 100%
            position absolute
            top 100px;
            margin-bottom 52px
            left 0
            background-color #f4f4f4
</style>
