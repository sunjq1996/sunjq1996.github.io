// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// eslint-disable-next-line
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import router from './router'
import Bmob from 'hydrogen-js-sdk'
Bmob.initialize('618651b9bdb77d9e', 'sphinx')

Vue.config.productionTip = false
Vue.prototype.Bmob = Bmob

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
