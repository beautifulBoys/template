
import Vue from 'vue';
import Element from 'element-ui';
import Ajax from './api/ajax_router';
import 'element-ui/lib/theme-default/index.css';

let loadingConfig = {
  fullscreen: true,
  lock: false,
  text: '玩命加载中...'
};

function initFunc () {
  Vue.prototype.ajax = Ajax;
  let loading = null;
  Vue.prototype.loading = (bool) => {
    if (bool) loading = Element.Loading.service(loadingConfig);
    else loading.close();
  };
  Vue.use(Element);
}

export default initFunc;
