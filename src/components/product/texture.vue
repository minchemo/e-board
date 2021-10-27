<template>
  <div class="texture">
    <div class="bg"></div>
  </div>
</template>

<style lang="scss" scoped>
.texture {
  width: 100%;
  height: 100vh;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/product/texture/bg.jpg");
    background-size: cover;
    background-position: center center;
  }
}
</style>

<script>
export default {
  name: "ProductTexture",
  components: {
  },
};
</script>
