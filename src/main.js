import Vue from 'vue'
import { router } from '@/routes/routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/app.css'

/* jQuery */
global.jQuery = require('jquery');
const $ = global.jQuery;
window.$ = $;

/* Snow */


import App from './App.vue'
Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
