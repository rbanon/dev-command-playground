<template>
  <div class="loading" :class="`loading--${variant}`">
    <div class="loading__spinner" v-if="variant === 'spinner'">
      <Loader2 :size="22" class="spin" />
      <span class="loading__msg">{{ message ?? t('loading') }}</span>
    </div>
    <div class="loading__skeleton" v-else>
      <div v-for="n in count" :key="n" class="skeleton-row">
        <div class="skeleton-cell skeleton-cell--wide" />
        <div class="skeleton-cell" />
        <div class="skeleton-cell skeleton-cell--narrow" />
        <div class="skeleton-cell skeleton-cell--narrow" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

withDefaults(
  defineProps<{
    variant?: 'spinner' | 'skeleton'
    message?: string
    count?: number
  }>(),
  { variant: 'skeleton', count: 6 },
)
</script>

<style lang="scss" scoped>
.loading {
  &__spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 3rem;
    color: var(--text-muted);
  }

  &__msg {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }

  &__skeleton {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
}

.skeleton-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-subtle);
}

.skeleton-cell {
  height: 13px;
  border-radius: var(--radius-sm);
  background: linear-gradient(90deg, var(--bg-tertiary) 25%, var(--border-subtle) 50%, var(--bg-tertiary) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  flex: 1;

  &--wide   { flex: 3; }
  &--narrow { flex: 0 0 56px; }
}

.spin { animation: rotate 1s linear infinite; }

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>
