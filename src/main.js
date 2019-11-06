import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font_1493175_9s2dd6o1lnt/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
