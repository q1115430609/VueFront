import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexPage from '@/page/indexPage'
import GetAndSaveMoney from "@/components/GetAndSaveMoney"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/GetAndSaveMoney',
      name:"GetAndSaveMoney",
      component:GetAndSaveMoney
    }
  ]
})
