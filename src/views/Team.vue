<template>
  <div class="team">
    <div class="bg"></div>
    <Nav :theme="'team-theme'"/>
  </div>
</template>


<style lang="scss" scoped>
.team {
  width: 100%;
  height: 100vh;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/team/bg.jpg");
    background-size: cover;
    background-position: center center;
  }
}
</style>

<script>
import Nav from "../components/layout/nav.vue";
export default {
  name: "Team",
  components: {
    Nav,
  },
};
</script>
