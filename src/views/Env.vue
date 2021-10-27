<template>
    <div class="env">
    <div class="bg"></div>
    <Nav :theme="'env-theme'"/>
    </div>
</template>

<style lang="scss" scoped>
.env {
  width: 100%;
  height: 100vh;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/env/bg.jpg");
    background-size: cover;
    background-position: center center;
  }
}
</style>

<script>
import Nav from "../components/layout/nav.vue";
export default {
  name: "Env",
  components: {
    Nav,
  },
};
</script>
