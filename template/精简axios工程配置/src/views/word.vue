<template>
  <div class="box">
    <iframe ref="iframe" class="iframe"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted () {
      this.$refs.iframe.src = './aa.html';
    }
  };
</script>

<style lang="less" scoped>
  .box {
    width: 100%;
    height: 100%;
    .iframe {
      width: 100%;
      height: 660px;
      border: none;
      border-top: 1px solid red;
      border-bottom: 1px solid red;
    }
  }
</style>
