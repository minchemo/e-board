import Vue from 'vue'
import App from './App.vue'

import "normalize.css"

/**
 * vuex
 */
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {}
})

/**
 * router
 */
import router from './router'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
