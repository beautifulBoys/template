<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <XButton type="primary">我是vux的按钮</XButton>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '我是首页'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h1 {
    color: red;
  }
</style>
