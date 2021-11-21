<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
    <Rotate />
    <div class="version">1.0</div>
  </div>
</template>

<style>
.version {
  position: fixed;
  z-index: 10000;
  right: 20px;
  top: 20px;
  color: green;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 15px;
}
</style>

<script>
import Rotate from "@/components/rotate.vue";

export default {
  components: {
    Rotate
  }
}
</script>