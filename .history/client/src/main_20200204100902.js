import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "./http"

Vue.config.productionTip = false
Vue.prototype.

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
