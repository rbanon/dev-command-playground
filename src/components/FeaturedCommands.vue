<template>
  <section class="featured">
    <div class="featured__header">
      <h2 class="featured__title">{{ t('featured.title') }}</h2>
      <p class="featured__sub">{{ t('featured.subtitle') }}</p>
    </div>

    <LoadingState v-if="isLoading" variant="skeleton" :count="3" />

    <EmptyState v-else-if="isError" icon="⚠️" :title="t('empty.error_cmd_title')" />

    <div v-else-if="commands && commands.length > 0" class="featured__grid">
      <article
        v-for="cmd in commands"
        :key="cmd.id"
        class="featured-card"
        :class="cmd.risk_level && `featured-card--${cmd.risk_level}`"
      >
        <div class="featured-card__top">
          <code class="featured-card__command">{{ cmd.command }}</code>
          <CopyButton :text="cmd.command" size="sm" />
        </div>
        <p class="featured-card__desc">{{ cmd.description }}</p>
        <div class="featured-card__badges">
          <span class="badge badge--category">{{ cmd.category }}</span>
          <span v-if="cmd.risk_level" :class="['badge', `badge--risk-${cmd.risk_level}`]">
            {{ t(`risk.${cmd.risk_level}`) }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useFeaturedCommands } from '@/composables/useCommands'
import CopyButton from '@/components/CopyButton.vue'
import LoadingState from '@/components/LoadingState.vue'
import EmptyState from '@/components/EmptyState.vue'

const { t } = useI18n()
const { data: commands, isLoading, isError } = useFeaturedCommands()
</script>

<style lang="scss" scoped>
.featured {
  padding: 1.5rem;

  &__header { margin-bottom: 1rem; }

  &__title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  &__sub {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 0.75rem;
  }
}

.featured-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 0.75rem 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color var(--transition), box-shadow var(--transition);

  &:hover { border-color: var(--text-secondary); box-shadow: var(--shadow); }
  &--danger  { border-left: 3px solid var(--danger); }
  &--warning { border-left: 3px solid var(--warning); }

  &__top {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  &__command {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--accent);
    background: var(--accent-dim);
    padding: 0.2rem 0.45rem;
    border-radius: var(--radius-sm);
    flex: 1;
    word-break: break-all;
    line-height: 1.5;
  }

  &__desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.4;
  }

  &__badges {
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
    margin-top: auto;
  }
}

.badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.68rem;
  font-weight: 500;
  padding: 0.1rem 0.45rem;
  border-radius: var(--radius-full);
  white-space: nowrap;

  &--category    { background: var(--bg-tertiary); color: var(--text-secondary); border: 1px solid var(--border-color); }
  &--risk-safe   { background: var(--success-dim); color: var(--success); border: 1px solid rgba(62,180,137,0.3); }
  &--risk-warning{ background: var(--accent-dim); color: var(--warning); border: 1px solid rgba(232,160,32,0.3); }
  &--risk-danger { background: rgba(224,82,82,0.1); color: var(--danger); border: 1px solid rgba(224,82,82,0.3); }
}
</style>
