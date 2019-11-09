import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

const router = new VueRouter({routes});

const routes = [
  { path: '/test', component: App }
]

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
