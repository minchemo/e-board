<template>
    <div>
        產品
    <Nav :theme="'product-theme'" />
    </div>
</template>

<script>
import Nav from "../components/layout/nav.vue";
export default {
  name: "Product",
  components: {
    Nav,
  },
};
</script>
