<template>
  <div class="tech-view">
    <template v-if="tech">
      <div class="tech-view__header">
        <h2 class="tech-view__name">{{ tech.name }}</h2>
        <p class="tech-view__desc">{{ locale === 'en' ? (tech.short_description_en ?? tech.short_description) : tech.short_description }}</p>
      </div>

      <CommandToolbar
        v-model:search-text="searchText"
        v-model:selected-category="selectedCategory"
        v-model:selected-use-case="selectedUseCase"
        v-model:selected-level="selectedLevel"
        v-model:selected-risk="selectedRisk"
        v-model:view-mode="viewMode"
        :categories="categories"
        :use-cases="useCases"
        :has-active-filters="hasActiveFilters"
        :result-count="filteredCommands.length"
        @clear-filters="clearFilters"
      />

      <div class="tech-view__content">
        <LoadingState v-if="isLoading" variant="skeleton" :count="8" />

        <EmptyState
          v-else-if="isError"
          icon="⚠️"
          :title="t('empty.error_cmd_title')"
          :description="t('empty.error_cmd_desc')"
        />

        <EmptyState
          v-else-if="filteredCommands.length === 0 && hasActiveFilters"
          icon="🔍"
          :title="t('empty.no_results_title')"
          :description="t('empty.no_results_desc')"
          :action="t('empty.no_results_action')"
          @action="clearFilters"
        />

        <EmptyState
          v-else-if="filteredCommands.length === 0"
          icon="📭"
          :title="t('empty.no_commands_title')"
          :description="t('empty.no_commands_desc')"
        />

        <template v-else>
          <CommandTable v-if="viewMode === 'table'" :commands="filteredCommands" />
          <div v-else class="tech-view__cards">
            <CommandCard v-for="cmd in filteredCommands" :key="cmd.id" :cmd="cmd" />
          </div>
        </template>
      </div>
    </template>

    <EmptyState
      v-else
      icon="🔍"
      :title="t('empty.not_found_title')"
      :description="t('empty.not_found_desc')"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { technologies } from '@/data'
import { useCommands } from '@/composables/useCommands'
import { useFilters } from '@/composables/useFilters'
import CommandToolbar from '@/components/CommandToolbar.vue'
import CommandTable from '@/components/CommandTable.vue'
import CommandCard from '@/components/CommandCard.vue'
import LoadingState from '@/components/LoadingState.vue'
import EmptyState from '@/components/EmptyState.vue'

const { t, locale } = useI18n()
const route = useRoute()

const slug = computed(() => route.params.slug as string)
const tech = computed(() => technologies.find((t) => t.slug === slug.value) ?? null)
const techId = computed(() => tech.value?.id ?? null)

const viewMode = ref<'table' | 'cards'>(window.innerWidth <= 1024 ? 'cards' : 'table')
const { data: rawCommands, isLoading, isError } = useCommands(techId)

const {
  searchText, selectedCategory, selectedUseCase, selectedLevel, selectedRisk,
  filteredCommands, categories, useCases, hasActiveFilters, clearFilters,
} = useFilters(rawCommands)

watch(slug, () => clearFilters())
</script>

<style lang="scss" scoped>
.tech-view {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-width: 0;

  &__header {
    padding: 1rem 1.25rem 0.875rem;
    border-bottom: 1px solid var(--border-color);
    background: var(--bg-primary);
    flex-shrink: 0;
  }

  &__name {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.2;
  }

  &__desc {
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin-top: 2px;
  }

  &__content {
    flex: 1;
    overflow-y: auto;
    min-height: 0;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
    gap: 0.75rem;
    padding: 1rem;
  }
}
</style>
