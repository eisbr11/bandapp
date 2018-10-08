import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import VueLocalStorage from 'vue-localstorage';
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueLocalStorage);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
