<template>
  <div class="empty">
    <div class="empty__icon">{{ icon }}</div>
    <p class="empty__title">{{ title }}</p>
    <p v-if="description" class="empty__desc">{{ description }}</p>
    <button v-if="action" class="empty__btn" @click="emit('action')">
      {{ action }}
    </button>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    icon?: string
    title: string
    description?: string
    action?: string
  }>(),
  {
    icon: '🔍',
  },
)

const emit = defineEmits<{ action: [] }>()
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 4rem 2rem;
  text-align: center;

  &__icon {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 0.25rem;
    opacity: 0.6;
  }

  &__title {
    font-size: var(--text-base);
    font-weight: 500;
    color: var(--text-secondary);
  }

  &__desc {
    font-size: var(--text-sm);
    color: var(--text-muted);
    max-width: 320px;
  }

  &__btn {
    margin-top: 0.5rem;
    padding: 0.4rem 1rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    background: none;
    cursor: pointer;
    transition: border-color var(--transition), color var(--transition);

    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  }
}
</style>
