<template>
<div class='box'>
  <iframe ref='iframe' id="iframe" :src="iframeSrc" style="margin: 0;width: 100%;height: 100%;border: 0px solid #d0d0d0;" />
</div>
</template>

<script>
import Hammer from 'hammerjs';

export default {
  mounted () {
    this.iframeSrc = 'https://beautifulboys.github.io/test/';
    // get a reference to an element
    setTimeout(function () {
      var iframe = document.getElementById('iframe');

      // create a manager for that element
      var mc = new Hammer.Manager(iframe);

      // create a recognizer
      var Pinch = new Hammer.Pinch();

      // add the recognizer
      mc.add(Pinch);

      // subscribe to events
      mc.on('pinch', function (e) {
        // do something cool
        alert('缩放');
      });
    }, 2000);
  },
  data () {
    return {
      iframeSrc: ''
    };
  },
  methods: {

  }
};
</script>

<style lang='less' scoped>
.box {
    width: 100%;
    height: 100%;
    background: #eee;
    box-sizing: border-box;
}
</style>
