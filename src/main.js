import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router';
import 'vuetify/dist/vuetify.css';

import vuefire from "vuefire";

Vue.use(vuefire);

Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
