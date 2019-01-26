import Vue from 'vue';
import Login from './Login.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<login/>',
  components: { Login },
});
