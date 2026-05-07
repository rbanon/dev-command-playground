<template>
  <AppHeader />
  <div class="app-body">
    <TechnologySidebar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import TechnologySidebar from '@/components/TechnologySidebar.vue'
</script>

<style lang="scss">
.app-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

@media (max-width: 768px) {
  .app-body {
    flex-direction: column;

    :deep(.sidebar__list) {
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      padding: 0.25rem 0.5rem;
      max-height: none;
      flex-wrap: nowrap;
      gap: 0.25rem;
    }

    :deep(.sidebar__item) {
      flex-shrink: 0;
      border-left: none;
      border-bottom: 2px solid transparent;
      border-radius: var(--radius-md);
      padding: 0.35rem 0.625rem;

      &.active {
        border-left-color: transparent;
        border-bottom-color: var(--accent);
      }
    }

    :deep(.sidebar__search) { display: none; }
  }
}
</style>
