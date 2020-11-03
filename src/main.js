import Vue from 'vue';
import router from './router';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'lib-flexible';
import 'vant/lib/index.css';
import '@/assets/css/common.css';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

axios.interceptors.request.use(function() {
  // loading、请求地址替换、修改
});

axios.interceptors.response.use(
  function(response) {
    let res = response.data;
    if (res.code !== 0) {
      alert(res.message);
    }
  },
  function(error) {
    return Promise.reject(error);
  }
);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
