import Vue from 'vue'
import Router from 'vue-router'

// 引入组件页面
import home from '@/components/home'
import xiong from '@/components/xiong.vue'
import note from '@/components/note.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { // 首页
      path: '/home',
      name: 'home',
      component: home
    },
    { // project-xiong
      path: '/xiong',
      name: 'xiong',
      component: xiong
    },
    { // project-note
      path: '/note',
      name: 'note',
      component: note
    }
  ]
})
