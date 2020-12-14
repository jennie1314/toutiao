import Vue from 'vue'

import App from './App.vue'
import Vant from './plugins/vant.js'
import router from './routes'

import './util/http.js'
import 'lib-flexible'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
