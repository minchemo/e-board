<template>
  <div class="product">
    <ProductInfo v-if="$route.name == '基本資料'" />
    <ProductPlan v-else-if="$route.name == '傢配圖'" />
    <ProductTexture v-else-if="$route.name == '建材'" />
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
import ProductInfo from '../components/product/info.vue';
import ProductPlan from '../components/product/plan.vue';
import ProductTexture from '../components/product/texture.vue';

import Nav from "../components/layout/nav.vue";
export default {
  name: "Product",
  components: {
    Nav,
    ProductInfo,
    ProductPlan,
    ProductTexture
  },
};
</script>
