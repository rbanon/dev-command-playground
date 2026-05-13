<template>
  <div class="app-root">
    <AppHeader />
    <div class="app-body">
      <TechnologySidebar />
      <RouterView />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import TechnologySidebar from '@/components/TechnologySidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style lang="scss">
.app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .app-body {
    flex-direction: column;
  }
}
</style>
