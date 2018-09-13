import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import axios from 'axios'

import {router} from './router'
import App from './App.vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false;

Vue.use(mavonEditor);

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // console.log(response);
  return response;
}, error => {
  return error.response
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
