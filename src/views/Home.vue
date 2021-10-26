<template>
  <div class="home">
    <Nav />
    <div class="bg"></div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  .bg {
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
