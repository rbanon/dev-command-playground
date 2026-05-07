<template>
  <div class="toolbar">
    <div class="toolbar__search">
      <Search :size="14" class="toolbar__search-icon" />
      <input
        :value="searchText"
        @input="emit('update:searchText', ($event.target as HTMLInputElement).value)"
        class="toolbar__search-input"
        type="text"
        :placeholder="t('toolbar.search_placeholder')"
        :aria-label="t('toolbar.search_placeholder')"
      />
      <kbd v-if="!searchText" class="toolbar__kbd">/</kbd>
      <button v-else class="toolbar__search-clear" @click="emit('update:searchText', '')">
        <X :size="12" />
      </button>
    </div>

    <div class="toolbar__filters">
      <select
        :value="selectedCategory"
        @change="emit('update:selectedCategory', ($event.target as HTMLSelectElement).value)"
        class="toolbar__select"
      >
        <option value="">{{ t('toolbar.category') }}</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>

      <select
        :value="selectedUseCase"
        @change="emit('update:selectedUseCase', ($event.target as HTMLSelectElement).value)"
        class="toolbar__select"
      >
        <option value="">{{ t('toolbar.use_case') }}</option>
        <option v-for="uc in useCases" :key="uc" :value="uc">{{ uc }}</option>
      </select>

      <select
        :value="selectedLevel"
        @change="emit('update:selectedLevel', ($event.target as HTMLSelectElement).value)"
        class="toolbar__select"
      >
        <option value="">{{ t('toolbar.level') }}</option>
        <option value="beginner">{{ t('level.beginner') }}</option>
        <option value="intermediate">{{ t('level.intermediate') }}</option>
        <option value="advanced">{{ t('level.advanced') }}</option>
      </select>

      <select
        :value="selectedRisk"
        @change="emit('update:selectedRisk', ($event.target as HTMLSelectElement).value)"
        class="toolbar__select"
      >
        <option value="">{{ t('toolbar.risk') }}</option>
        <option value="safe">{{ t('risk.safe') }}</option>
        <option value="warning">{{ t('risk.warning') }}</option>
        <option value="danger">{{ t('risk.danger') }}</option>
      </select>

      <button v-if="hasActiveFilters" class="toolbar__clear" @click="emit('clearFilters')">
        <X :size="13" />
        <span>{{ t('toolbar.clear') }}</span>
      </button>
    </div>

    <div class="toolbar__right">
      <span class="toolbar__count">
        {{ resultCount }} {{ resultCount === 1 ? t('toolbar.command') : t('toolbar.commands') }}
      </span>

      <div class="toolbar__view-toggle">
        <button
          class="view-btn"
          :class="{ active: viewMode === 'table' }"
          @click="emit('update:viewMode', 'table')"
          :title="t('toolbar.view_table')"
        >
          <List :size="15" />
        </button>
        <button
          class="view-btn"
          :class="{ active: viewMode === 'cards' }"
          @click="emit('update:viewMode', 'cards')"
          :title="t('toolbar.view_cards')"
        >
          <LayoutGrid :size="15" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search, X, List, LayoutGrid } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  searchText: string
  selectedCategory: string
  selectedUseCase: string
  selectedLevel: string
  selectedRisk: string
  categories: string[]
  useCases: string[]
  hasActiveFilters: boolean
  resultCount: number
  viewMode: 'table' | 'cards'
}>()

const emit = defineEmits<{
  'update:searchText': [value: string]
  'update:selectedCategory': [value: string]
  'update:selectedUseCase': [value: string]
  'update:selectedLevel': [value: string]
  'update:selectedRisk': [value: string]
  'update:viewMode': [value: 'table' | 'cards']
  clearFilters: []
}>()
</script>

<style lang="scss" scoped>
.toolbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-secondary);
  flex-shrink: 0;
  flex-wrap: wrap;

  &__search {
    position: relative;
    flex: 1;
    min-width: 200px;

    &-icon {
      position: absolute;
      left: 0.625rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      pointer-events: none;
    }

    &-input {
      width: 100%;
      padding: 0.375rem 2rem 0.375rem 2rem;
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: var(--text-sm);
      transition: border-color var(--transition);

      &::placeholder { color: var(--text-muted); }
      &:focus { outline: none; border-color: var(--accent); }
    }

    &-clear {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      padding: 2px;
      border-radius: var(--radius-sm);
      transition: color var(--transition);

      &:hover { color: var(--text-primary); }
    }
  }

  &__kbd {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-muted);
    border: 1px solid var(--border-color);
    border-radius: 3px;
    padding: 0 4px;
    line-height: 1.6;
    pointer-events: none;
  }

  &__filters {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    flex-wrap: wrap;
  }

  &__select {
    padding: 0.3rem 0.5rem;
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    font-family: var(--font-body);
    font-size: var(--text-xs);
    cursor: pointer;
    transition: border-color var(--transition), color var(--transition);
    max-width: 120px;

    &:focus { outline: none; border-color: var(--accent); }
    &:hover { border-color: var(--text-muted); }
    option { background: var(--bg-secondary); }
  }

  &__clear {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.3rem 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    color: var(--text-muted);
    font-family: var(--font-body);
    font-size: var(--text-xs);
    background: none;
    transition: all var(--transition);

    &:hover { color: var(--danger); border-color: var(--danger); }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-left: auto;
    flex-shrink: 0;
  }

  &__count {
    font-size: var(--text-xs);
    color: var(--text-muted);
    white-space: nowrap;
  }

  &__view-toggle {
    display: flex;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    overflow: hidden;
  }
}

.view-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 28px;
  color: var(--text-muted);
  background: var(--bg-primary);
  transition: background-color var(--transition), color var(--transition);

  &:not(:last-child) { border-right: 1px solid var(--border-color); }

  &.active { background: var(--accent-dim); color: var(--accent); }

  &:hover:not(.active) { background: var(--bg-tertiary); color: var(--text-primary); }
}
</style>
