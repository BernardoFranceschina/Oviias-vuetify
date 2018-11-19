import Vue from 'vue';
import Router from 'vue-router';
import login from './components/login.vue';
import mostruario from './components/mostruario.vue';
import index from './components/index.vue';
import carinho from './components/carinho.vue';
import umProd from './components/umProd.vue';
import pagamento from './components/pagamento.vue';
import addProd from "./components/addProd.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/mostruario',
      name: 'mostruario',
      component: mostruario
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/carinho',
      name: 'carinho',
      component: carinho
    },
    {
      path: '/mostruario/produto',
      name: 'produto',
      component: umProd
    },
    {
      path: '/carinho/pagamento',
      name: 'pagamento',
      component: pagamento
    },
    {
      path: "/addProd",
      name: "addProd",
      component: addProd
    }
  ]
})