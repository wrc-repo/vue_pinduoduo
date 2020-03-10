import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import Goods from '@/components/goods/Goods'
import Seckill from '@/components/seckill/Seckill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
        path:'/goods',
        name:'Goods',
        component:Goods
    },
    {
        path:'/seckill',
        name:'Seckill',
        component:Seckill
    }
  ]
})
