/**
 * Created by Administrator on 2017/6/7.
 */
import axios from 'axios';

var _ajax = axios.create({
  baseURL: 'http://localhost:3000/',
  transformResponse: [function (data) {
    return JSON.parse(data);
  }],
  headers: {'path-lixin': 'foobar'}
});
// 拦截response
_ajax.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
// 统一的错误处理函数
function _ajaxCatch (err) {
  console.log(err);
};

var ajax = {
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

export default ajax;
