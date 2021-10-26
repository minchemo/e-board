<template>
  <div class="nav">
    <router-link to="/env">周邊環境</router-link>
    <router-link to="/team">團隊介紹</router-link>
    <router-link to="/product">產品導覽</router-link>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  width: size(1060);
  height: 50px;
  background: #fff;
}
</style>


<script>
export default {
  name: "nav",
  props: {
    themeColor: String,
  },
};
</script>