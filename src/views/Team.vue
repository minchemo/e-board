<template>
  <div class="team">
    <S1 v-if="$route.name == '長虹建設'" />
    <S2 v-else-if="$route.name == '森聯建設'" />
    <S3 v-else-if="$route.name == '建築職人'" />
    <S4 v-else-if="$route.name == '樣品屋'" />
    <Nav :theme="'team-theme'" />
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
import S1 from "../components/team/s1.vue";
import S2 from "../components/team/s2.vue";
import S3 from "../components/team/s3.vue";
import S4 from "../components/team/s4.vue";

export default {
  name: "Team",
  components: {
    Nav,
    S1,
    S2,
    S3,
    S4
  },
};
</script>
