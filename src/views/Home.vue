<template>
  <div class="home">
    <Nav :theme="'home-theme'" />
    <div class="bg"></div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  .bg {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('../assets/home/bg.jpg');
    background-size: cover;
    background-position: center center;
  }
}
</style>

<script>
import Nav from "../components/layout/nav.vue";
export default {
  name: "Home",
  components: {
    Nav,
  },
  mounted() {},
};
</script>
