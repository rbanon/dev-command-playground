<template>
  <article class="card" :class="cmd.risk_level && `card--${cmd.risk_level}`">
    <div class="card__header">
      <CopyButton :text="cmd.command" size="sm" />
      <code class="card__command">{{ cmd.command }}</code>
    </div>

    <p class="card__desc">{{ describe(cmd) }}</p>

    <div v-if="cmd.example" class="card__example">
      <span class="card__example-label">{{ t('example') }}</span>
      <div class="card__example-wrap">
        <code class="card__example-code">{{ cmd.example }}</code>
        <CopyButton :text="cmd.example" size="sm" />
      </div>
    </div>

    <div class="card__footer">
      <div class="card__tags">
        <span class="badge badge--category">{{ cmd.category }}</span>
        <span class="badge badge--usecase">{{ cmd.use_case }}</span>
      </div>
      <div class="card__badges">
        <span v-if="cmd.difficulty_level" :class="['badge', `badge--level-${cmd.difficulty_level}`]">
          {{ t(`level.${cmd.difficulty_level}`) }}
        </span>
        <span v-if="cmd.risk_level" :class="['badge', `badge--risk-${cmd.risk_level}`]">
          {{ t(`risk.${cmd.risk_level}`) }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import CopyButton from '@/components/CopyButton.vue'
import type { Command } from '@/types/command'
import { useCommandDescription } from '@/composables/useCommandDescription'

const { t } = useI18n()
const describe = useCommandDescription()

defineProps<{ cmd: Command }>()
</script>

<style lang="scss" scoped>
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 0.875rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  transition: border-color var(--transition), box-shadow var(--transition);

  &:hover { border-color: var(--text-secondary); box-shadow: var(--shadow); }
  &--danger  { border-left: 3px solid var(--danger); }
  &--warning { border-left: 3px solid var(--warning); }

  &__header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  &__command {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--accent);
    background: var(--accent-dim);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
    word-break: break-all;
    flex: 1;
    line-height: 1.5;
  }

  &__desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.5;
  }

  &__example {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    &-label {
      font-size: var(--text-xs);
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    &-wrap {
      display: flex;
      align-items: flex-start;
      gap: 0.375rem;
    }

    &-code {
      flex: 1;
      font-family: var(--font-mono);
      font-size: 0.78rem;
      color: var(--text-primary);
      background: var(--bg-tertiary);
      border: 1px solid var(--border-color);
      padding: 0.375rem 0.625rem;
      border-radius: var(--radius-sm);
      white-space: pre-wrap;
      word-break: break-all;
      line-height: 1.5;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: auto;
  }

  &__tags, &__badges { display: flex; gap: 0.25rem; flex-wrap: wrap; }
}

.badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.68rem;
  font-weight: 500;
  padding: 0.1rem 0.45rem;
  border-radius: var(--radius-full);
  white-space: nowrap;

  &--category { background: var(--bg-tertiary); color: var(--text-secondary); border: 1px solid var(--border-color); }
  &--usecase  { background: var(--accent-dim); color: var(--accent); border: 1px solid rgba(232,160,32,0.25); }

  &--level-beginner     { background: var(--success-dim); color: var(--success); border: 1px solid rgba(62,180,137,0.25); }
  &--level-intermediate { background: var(--blue-dim); color: var(--blue); border: 1px solid rgba(74,143,222,0.25); }
  &--level-advanced     { background: var(--accent-dim); color: var(--warning); border: 1px solid rgba(232,160,32,0.25); }

  &--risk-safe    { background: var(--success-dim); color: var(--success); border: 1px solid rgba(62,180,137,0.3); }
  &--risk-warning { background: var(--accent-dim); color: var(--warning); border: 1px solid rgba(232,160,32,0.3); }
  &--risk-danger  { background: rgba(224,82,82,0.1); color: var(--danger); border: 1px solid rgba(224,82,82,0.3); }
}
</style>
