import ajax from './ajax';

export default {
  leshi: {
    ios (data) {
      return ajax.get('index', data);
    },
    android (data) {
      return ajax.post('index', data);
    }
  },
  jingdong: {
    ios (data) {
      return ajax.delete('index', data);
    },
    android (data) {
      return ajax.put('index', data);
    }
  }
};
