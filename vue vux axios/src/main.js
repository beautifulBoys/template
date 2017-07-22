// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import Ajax from './api/ajax_router';

import {
  XInput,
  XButton,
  LoadingPlugin,
  DatetimePlugin
} from 'vux';

Vue.config.productionTip = false;
Vue.prototype.ajax = Ajax;

Vue.use(LoadingPlugin);
Vue.use(DatetimePlugin);

Vue.component('XInput', XInput);
Vue.component('XButton', XButton);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
