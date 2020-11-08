import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './routes/routes';

Vue.filter('price', (value) => {
  if (Number.isInteger(value)) {
    return `R$ ${value.toFixed(2)}`;
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
