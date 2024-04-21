import Vue from 'vue'

// plugins
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// plugins css
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
