<template>
  <div class="hello">
    我是index页面
    <div>{{text}}</div>
    <div class="row">
      <el-button type="success">element按钮</el-button>
      <el-button type="warning">element按钮</el-button>
      <el-button type="primary">element按钮</el-button>
      <el-button>element按钮</el-button>
      <el-button type="danger">element按钮</el-button>
    </div>
    <div class="row">
      <el-button type="primary" @click="loadingEvent1">请求屏幕等待</el-button>
      <el-button type="primary" @click="loadingEvent2" :loading="btn_loading">请求按钮等待</el-button>
    </div>
    <div class="row">
      <el-button type="primary" @click="event1">异步请求(有加载等待)</el-button>
      <el-button type="primary" @click="event2">异步请求(无加载等待)</el-button>
    </div>
    <pre>{{code}}</pre>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    data () {
      return {
        code: '',
        btn_loading: false
      };
    },
    computed: {
      ...mapState(['text'])
    },
    methods: {
      event1 () {
        this.ajax.test.get('0').then((res) => {
          this.code = res;
        }).catch();
      },
      event2 () {
        this.ajax.test.get1('0').then((res) => {
          this.code = res;
        }).catch();
      },
      loadingEvent1 () {
        this.loading(true);
        setTimeout(() => {
          this.loading(false);
        }, 2000);
      },
      loadingEvent2 () {
        this.btn_loading = true;
        setTimeout(() => {
          this.btn_loading = false;
        }, 2000);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .row {
    margin: 20px 0;
  }
</style>
