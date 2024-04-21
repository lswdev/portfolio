import Vue from 'vue'
import { router } from '@/routes/routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// plugins css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/app.css'
import '@/components/Snow'

import App from './App.vue'
Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
