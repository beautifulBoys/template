/**
 * Created by Administrator on 2017/6/7.
 */
import axios from 'axios';
import Element from 'element-ui';
let ajaxConfig = {
  baseURL: 'http://localhost:3000',
  transformResponse: [function (data) {
    return JSON.parse(data);
  }],
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  }
};
var _ajax = axios.create(ajaxConfig);
var _ajaxNoLoading = axios.create(ajaxConfig);

// 拦截response
_ajax.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
_ajaxNoLoading.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

// 统一的错误处理函数
function _ajaxCatch (err) {
  console.log(err);
};

let loading = null;
let loadingConfig = {
  fullscreen: true,
  lock: false,
  text: '玩命加载中...'
};
function loadFunc (bool) {
  if (bool) loading = Element.Loading.service(loadingConfig);
  else loading.close();
};

// 加载等待 - 添加等待
_ajax.interceptors.request.use(function (config) {
  loadFunc(true);
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 加载等待 - 移除等待
_ajax.interceptors.response.use(function (response) {
  loadFunc(false);
  return response;
}, function (error) {
  loadFunc(false);
  return error;
});

var ajax1 = {
  get (url, data) {
    return _ajax.get(url, data).catch(_ajaxCatch);
  },
  post (url, data) {
    return _ajax.post(url, data).catch(_ajaxCatch);
  },
  put (url, data) {
    return _ajax.put(url, data).catch(_ajaxCatch);
  },
  delete (url, data) {
    return _ajax.delete(url, data).catch(_ajaxCatch);
  }
};

var ajax2 = {
  get (url, data) {
    return _ajaxNoLoading.get(url, data).catch(_ajaxCatch);
  },
  post (url, data) {
    return _ajaxNoLoading.post(url, data).catch(_ajaxCatch);
  },
  put (url, data) {
    return _ajaxNoLoading.put(url, data).catch(_ajaxCatch);
  },
  delete (url, data) {
    return _ajaxNoLoading.delete(url, data).catch(_ajaxCatch);
  }
};

export {ajax1, ajax2};
