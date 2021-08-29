import Vue from 'vue'
import Router from 'vue-router'

// 引入组件页面
import home from '@/components/home'
import fss from '@/components/fss.vue'
import note from '@/components/note.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { // 首页
      path: '/',
      name: 'home',
      component: home
    },
    { // project-fss
      path: '/fss',
      name: 'fss',
      component: fss
    },
    { // project-note
      path: '/note',
      name: 'note',
      component: note
    }
  ]
})
