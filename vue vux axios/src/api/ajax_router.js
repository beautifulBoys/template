import {ajax1, ajax2} from './ajax';

export default {
  leshi: {
    ios (data) {
      return ajax1.get('index', data);
    },
    android (data) {
      return ajax1.post('index', data);
    }
  },
  jingdong: {
    ios (data) {
      return ajax1.delete('index', data);
    },
    android (data) {
      return ajax1.put('index', data);
    }
  },
  test: {
    get (data) {
      return ajax1.get('/weixin/department/struct/list?deptId=' + data);
    },
    get1 (data) {
      return ajax2.get('/weixin/department/struct/list?deptId=' + data);
    }
  }
};
