<template>
  <div class="env">
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <Nav :theme="'env-theme'" />
  </div>
</template>

<style lang="scss" scoped>
.env {
  width: 100%;
  height: 100vh;
}
</style>

<script>
import Nav from "../components/layout/nav.vue";
import S1 from "../components/env/s1.vue";
import S2 from "../components/env/s2.vue";
import S3 from "../components/env/s3.vue";
import S4 from "../components/env/s4.vue";
import S5 from "../components/env/s5.vue";

export default {
  name: "Env",
  components: {
    Nav,
    S1,
    S2,
    S3,
    S4,
    S5,
  },
};
</script>
