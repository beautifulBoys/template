<template>
  <canvas ref="canvas" id='canvas'></canvas>
</template>

<script>
  import SignaturePad from 'signature_pad';
  export default {
    data () {
      return {
        signaturePad: null
      };
    },
    mounted () {
      var canvas = this.$refs.canvas;

      setTimeout(() => {
        var parent = canvas.parentNode;
        canvas.height = parent.offsetHeight;
        canvas.width = parent.offsetWidth;
      });
      this.signaturePad = new SignaturePad(canvas, {
        minWidth: 2,
        maxWidth: 4,
        penColor: '#000',
        backgroundColor: 'rgba(0,0,0,0)'
      });

      this.signaturePad.toDataURL();

      window.onresize = () => {
        var ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
      };
    },
    methods: {
      clear () {
        this.signaturePad.clear();
      },
      getData () {
        if (this.signaturePad.isEmpty()) return null;
        else return this.signaturePad.toDataURL();
      }
    }
  };
</script>
