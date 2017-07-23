import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import VueFormGenerator from 'vue-form-generator'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueOnsen)
Vue.use(VueFormGenerator)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
