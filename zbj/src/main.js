import Vue from 'vue'
import App from './App.vue'
import Gin from 'vue-resource'

Vue.config.productionTip = false

Vue.use(Gin)
new Vue({
  render: h => h(App)
}).$mount('#app')
