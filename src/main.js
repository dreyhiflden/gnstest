import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  created() {
    this.$store.dispatch('loadUsers')
  },
}).$mount('#app');
