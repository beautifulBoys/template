<template>
<div class='box'>
  <div @click="clickEvent" style="width: 100%;height: 120px;border: 1px solid #666;margin: 0 auto;text-align: center;line-height: 120px;">点击签名</div>
  <img ref="img" class="img" />
  <div class="fixed" v-if="status" ref="fixed">
    <div class="canvas-box">
      <button class="ok" @click="sureEvent">确认</button>
      <button class="clear" @click="clearEvent">清空</button>
      <li-signature class="canvas" ref="signature"></li-signature>
    </div>
  </div>
</div>
</template>

<script>
import signature from '../components/signature';
export default {
  components: {
    'li-signature': signature
  },
  data () {
    return {
      status: false,
      data: null
    };
  },
  methods: {
    clickEvent () {
      this.status = true;
    },
    clearEvent () {
      this.$refs.signature.clear();
    },
    sureEvent () {
      this.status = false;
      this.data = this.$refs.signature.getData();
      if (this.data) this.$refs.img.src = this.data;
      this.downLoad();
    },
    downLoad () {
      var filename = Date.parse(new Date()) + '.jpg';
      this.savaFile(this.data, filename);
    },
    savaFile (data, filename) {
      var saveLink = document.createElement('a');
      saveLink.href = data;
      saveLink.download = filename;
      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      saveLink.dispatchEvent(event);
    }
  }
};
</script>

<style lang='less' scoped>
.box {
    width: 100%;
    height: 100%;
    background: #eee;
    box-sizing: border-box;
    .img {
        width: 150px;
        border: 1px dashed red;
    }
    .fixed {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        .canvas-box {
            width: 100%;
            height: 100%;
            position: relative;
            .canvas {
                width: 100%;
                height: 100%;
                background: #fff;
            }
            button {
                position: absolute;
                width: 80px;
                line-height: 30px;
                background: #fff;
                outline: none;
                border: 1px solid #aaa;
                &:active {
                    background: #ddd;
                }
                &.ok {
                    bottom: 0;
                    right: 0;
                }
                &.clear {
                    bottom: 0;
                    right: 100px;
                }
            }
        }
    }
}
</style>
