<template>
  <button
    class="copy-btn"
    :class="[`copy-btn--${size}`, { copied }]"
    @click.stop="copy"
    :title="copied ? t('copy.copied') : t('copy.copy')"
    :aria-label="copied ? t('copy.copied') : t('copy.copy')"
  >
    <CheckCheck v-if="copied" :size="iconSize" />
    <Copy v-else :size="iconSize" />
    <span v-if="size !== 'sm'" class="copy-btn__label">
      {{ copied ? t('copy.copied') : t('copy.copy') }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Copy, CheckCheck } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = withDefaults(
  defineProps<{ text: string; size?: 'sm' | 'md' }>(),
  { size: 'md' },
)

const copied = ref(false)
const iconSize = computed(() => (props.size === 'sm' ? 13 : 14))

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text)
    copied.value = true
    setTimeout(() => { copied.value = false }, 1800)
  } catch {
    // fallback silencioso
  }
}
</script>

<style lang="scss" scoped>
.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-size: var(--text-xs);
  font-family: var(--font-body);
  transition: color var(--transition), background-color var(--transition), border-color var(--transition);
  white-space: nowrap;

  &--md {
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--border-color);
    background: var(--bg-tertiary);
    height: 26px;

    &:hover { color: var(--accent); border-color: var(--accent); }
  }

  &--sm {
    padding: 4px;
    width: 26px;
    height: 26px;
    justify-content: center;
    flex-shrink: 0;

    &:hover { color: var(--accent); background: var(--accent-dim); }
  }

  &.copied { color: var(--success); border-color: var(--success); }

  &__label { font-size: 0.7rem; }
}
</style>
