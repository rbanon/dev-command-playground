<template>
  <div class="home">
    <FeaturedCommands />
  </div>
</template>

<script setup lang="ts">
import FeaturedCommands from '@/components/FeaturedCommands.vue'
</script>

<style lang="scss" scoped>
.home {
  flex: 1;
  overflow-y: auto;
  min-width: 0;
}
</style>
