import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core import 'css'
import 'primeicons/primeicons.css'
Vue.use(PrimeVue);
import import_components from './import_components'
import_components.load(Vue)
Vue.config.productionTip = false
new Vue({
  PrimeVue,
  router,
  render: h => h(App)
}).$mount('#app')
