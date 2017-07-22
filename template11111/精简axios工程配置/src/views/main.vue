<template>
<div class="box">
  <button v-for="item in list" @click="clickEvent(item)">{{item.text}}</button>
</div>
</template>

<script>

export default {
  methods: {
    clickEvent (item) {
      this.$router.push({path: item.path});
    }
  },
  mounted () {
    this.ajax.jingdong.ios().then(function (res) {
      console.log(res);
    }).catch();
  },
  data () {
    return {
      list: [
        {
          path: '/signature',
          text: '电子签名'
        },
        {
          path: '/word',
          text: '简历在线查看'
        },
        {
          path: '/resumeView',
          text: '简历在线查看1'
        },
        {
          path: '/treeShow',
          text: '树结构'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
  button {
    border: 1px solid #aaa;
    background: #fff;
    color: #333;
    font-size: 14px;
    margin: 10px;
    outline: none;
    border-radius: 15px;
    padding: 10px;
    &:active {
      background: #eee;
    }
  }
</style>
