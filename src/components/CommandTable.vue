<template>
  <div class="cmd-table-wrap">
    <table class="cmd-table">
      <thead class="cmd-table__head">
        <tr>
          <th class="col-command">{{ t('table.command') }}</th>
          <th class="col-desc">{{ t('table.description') }}</th>
          <th class="col-category">{{ t('table.category') }}</th>
          <th class="col-usecase">{{ t('table.use_case') }}</th>
          <th class="col-badges">{{ t('table.badges') }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="cmd in commands" :key="cmd.id">
          <tr
            class="cmd-row"
            :class="[cmd.risk_level && `cmd-row--${cmd.risk_level}`, { expanded: expandedId === cmd.id }]"
            @click="toggleExpand(cmd.id)"
          >
            <td class="cmd-row__command">
              <CopyButton :text="cmd.command" size="sm" />
              <code class="cmd-code">{{ cmd.command }}</code>
            </td>
            <td class="cmd-row__desc">{{ describe(cmd) }}</td>
            <td class="cmd-row__meta">
              <span class="badge badge--category">{{ cmd.category }}</span>
            </td>
            <td class="cmd-row__meta">
              <span class="badge badge--usecase">{{ cmd.use_case }}</span>
            </td>
            <td class="cmd-row__badges">
              <span v-if="cmd.difficulty_level" :class="['badge', `badge--level-${cmd.difficulty_level}`]">
                {{ t(`level.${cmd.difficulty_level}`) }}
              </span>
              <span v-if="cmd.risk_level" :class="['badge', `badge--risk-${cmd.risk_level}`]">
                {{ t(`risk.${cmd.risk_level}`) }}
              </span>
            </td>
          </tr>

          <tr v-if="expandedId === cmd.id && cmd.example" class="cmd-example-row">
            <td colspan="5" class="cmd-example-cell">
              <div class="cmd-example">
                <span class="cmd-example__label">{{ t('example') }}</span>
                <div class="cmd-example__code-wrap">
                  <code class="cmd-example__code">{{ cmd.example }}</code>
                  <CopyButton :text="cmd.example" size="sm" />
                </div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CopyButton from '@/components/CopyButton.vue'
import type { Command } from '@/types/command'
import { useCommandDescription } from '@/composables/useCommandDescription'

const { t } = useI18n()
const describe = useCommandDescription()

defineProps<{ commands: Command[] }>()

const expandedId = ref<string | null>(null)

function toggleExpand(id: string) {
  expandedId.value = expandedId.value === id ? null : id
}
</script>

<style lang="scss" scoped>
.cmd-table-wrap { overflow-x: auto; width: 100%; }

.cmd-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);

  &__head {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--bg-secondary);

    th {
      padding: 0.5rem 0.875rem;
      text-align: left;
      font-family: var(--font-body);
      font-size: var(--text-xs);
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      border-bottom: 1px solid var(--border-color);
      white-space: nowrap;
    }
  }
}

.col-command  { width: 32%; }
.col-desc     { width: 32%; }
.col-category { width: 12%; }
.col-usecase  { width: 12%; }
.col-badges   { width: 12%; }

.cmd-row {
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
  transition: background-color var(--transition);

  &:hover  { background-color: var(--bg-secondary); }
  &.expanded { background-color: var(--bg-secondary); }

  &--danger  td:first-child { border-left: 2px solid var(--danger); }
  &--warning td:first-child { border-left: 2px solid var(--warning); }

  td { padding: 0.625rem 0.875rem; vertical-align: middle; }

  &__command { display: flex; align-items: center; gap: 0.375rem; }
  &__desc    { color: var(--text-secondary); line-height: 1.4; }
  &__meta    { white-space: nowrap; }

  &__badges {
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
  }
}

.cmd-code {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent);
  background: var(--accent-dim);
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
  word-break: break-all;
}

.cmd-example-row {
  background-color: var(--bg-tertiary);
  td { border-bottom: 1px solid var(--border-color); }
}

.cmd-example-cell { padding: 0.5rem 0.875rem 0.75rem; }

.cmd-example {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  &__label {
    font-size: var(--text-xs);
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  &__code-wrap {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  &__code {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-primary);
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius-md);
    flex: 1;
    white-space: pre-wrap;
    word-break: break-all;
    line-height: 1.6;
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
