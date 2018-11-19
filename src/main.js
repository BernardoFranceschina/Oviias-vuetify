import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
