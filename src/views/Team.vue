<template>
  <div class="team">
    <Nav :theme="'team-theme'"/>
  </div>
</template>


<style lang="scss" scoped>
.team {
  width: 100%;
  height: 100vh;
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
