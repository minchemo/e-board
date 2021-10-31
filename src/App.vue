<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
    <Rotate />
  </div>
</template>

<style>
</style>

<script>
import Rotate from "@/components/rotate.vue";

export default {
  components: {
    Rotate
  }
}
</script>