<template>
  <div class="product">
    產品
    <div class="bg"></div>
    <Nav :theme="'product-theme'" />
  </div>
</template>

<style lang="scss" scoped>
.product {
  width: 100%;
  height: 100vh;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/product/bg.jpg");
    background-size: cover;
    background-position: center center;
  }
}
</style>

<script>
import Nav from "../components/layout/nav.vue";
export default {
  name: "Product",
  components: {
    Nav,
  },
};
</script>
