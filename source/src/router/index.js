import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Xiong from '@/components/Xiong.vue'
import Barrage from '@/components/Barrage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Xiong',
      component: Xiong
    },
    {
      path: '/',
      name: 'Barrage',
      component: Barrage
    }
  ]
})
