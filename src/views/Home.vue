<template>
  <div class="home">
    <Nav :theme="'home-theme'" />
    <div class="bg">
      <div class="logo" data-aos="fade-up" data-aos-duration="2000">
        <img src="@/assets/home/logo.png" alt="" srcset="" />
      </div>
    </div>
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
    background-image: url("../assets/home/bg.jpg");
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: size(782);
    img {
      width: 100%;
    }
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
  mounted() {
  },
};
</script>
