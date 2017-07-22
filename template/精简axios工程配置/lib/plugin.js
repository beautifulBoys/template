// import api from '@/api'
import ajax from './ajax'
let _vueObj;

let debug = false;
/**
 * 原生扩展  - 时间
 */
Date.prototype.Format = function(fmt) { //author: meizz
    if (isNaN(this.valueOf())) {
        return "";
    }
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};


let ui = {
    pop(msg) {

        alert('模拟pop:' + msg)
    },
    alert(msg) {
        //window.h5Request.alert(msg);
        //return;
        alert(msg)
    },
    confirm(msg, ok, cancel) {
        if (window.confirm(msg)) {
            if (ok) { ok() };

        } else {
            if (cancel) { cancel() }
        }
    },
    modal(dom, title, options) {
        _vueObj.$children[0].$refs.modal.open(dom, title, options);
    }
}

let VueFilterReg = (Vue) => {
        Vue.filter('timest', function(val, format) {
            if (val == null || val == "") return null;


            return new Date(val).Format('yyyy-MM-dd hh:mm');
        });
        Vue.filter('fixed', function(value, d) {
            d = d || 0;
            if (value === null || value === undefined || value === "") { return '' }
            let s = parseFloat(value).toFixed(d);
            return s;
        })

    }
    //计时器,fun返回true时结束
let timer = (fun, sec) => {
    var _scope = this;
    return new function() {
        this.scope = _scope;
        this.sec = sec;
        this.fun = fun;
        this.isStop = true;
        let _this = this;

        // this.pause=function(){

        // }
        // this.continue=function(){

        // }
        this.destory = function() {
            this.isStop = true;
        }
        this.start = function() {
            this.isStop = false;
            this.__thread();
        }

        this.__thread = function() {

            if (_this.isStop || fun.bind(_scope)(_this) === true) {
                return;
            }
            setTimeout(_this.__thread, _this.sec);

        }
        this.start();
    }

}

//存储
let store = {
    get: function(key) {
        if (!window.localStorage) {
            alert('This browser does NOT support localStorage');
            return;
        }
        var val = localStorage.getItem(key);

        if (val == null || val == undefined) {
            return null;

        } else {
            try {
                return JSON.parse(val)

            } catch (e) {

                return val;
            }
        }
    },
    set: function(key, value) {
        if (!window.localStorage) {
            alert('This browser does NOT support localStorage');
            return;
        }


        if (typeof(value) == "object") {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value)
    },
    clear: function(key) {
        if (!window.localStorage) {
            alert('This browser does NOT support localStorage');
            return;
        }
        localStorage.removeItem(key)
    }

}

function plugin(Vue) {
    if (plugin.installed) {
        return;
    }
    // Vue.prototype.api = api;
    Vue.prototype.ui = ui;
    Vue.prototype.ajax = ajax;
    Vue.prototype.timer = timer;
    Vue.prototype.store = store;

    VueFilterReg(Vue);
    plugin.installed = true;
}

plugin.bind = function(vueObj) {
    _vueObj = vueObj;
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

export default plugin;
