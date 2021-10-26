<template>
    <div>
        周邊環境
    <Nav :theme="'env-theme'"/>
    </div>
</template>

<script>
import Nav from "../components/layout/nav.vue";
export default {
  name: "Env",
  components: {
    Nav,
  },
};
</script>
