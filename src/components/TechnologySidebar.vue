<template>
  <aside class="sidebar">
    <div class="sidebar__search">
      <Search :size="14" class="sidebar__search-icon" />
      <input
        v-model="searchQuery"
        class="sidebar__search-input"
        type="text"
        :placeholder="t('sidebar.search_placeholder')"
        :aria-label="t('sidebar.search_placeholder')"
      />
      <button v-if="searchQuery" class="sidebar__search-clear" @click="searchQuery = ''">
        <X :size="12" />
      </button>
    </div>

    <nav class="sidebar__list">
      <LoadingState v-if="isLoading" variant="spinner" />

      <EmptyState
        v-else-if="isError"
        icon="⚠️"
        :title="t('empty.error_tech_title')"
        :description="t('empty.error_tech_desc')"
      />

      <template v-else>
        <button
          class="sidebar__item sidebar__item--home"
          :class="{ active: !activeSlug }"
          @click="navigate(null)"
        >
          <span class="sidebar__item-name">{{ t('sidebar.home') }}</span>
        </button>

        <EmptyState
          v-if="filteredTechs.length === 0"
          icon="🔍"
          :title="t('sidebar.no_results')"
        />

        <button
          v-for="tech in filteredTechs"
          :key="tech.id"
          class="sidebar__item"
          :class="{ active: activeSlug === tech.slug }"
          @click="navigate(tech.slug)"
        >
          <span class="sidebar__item-name">{{ tech.name }}</span>
        </button>
      </template>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search, X } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useTechnologies } from '@/composables/useTechnologies'
import LoadingState from '@/components/LoadingState.vue'
import EmptyState from '@/components/EmptyState.vue'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const { data: technologies, isLoading, isError } = useTechnologies()
const searchQuery = ref('')

const activeSlug = computed(() =>
  route.name === 'tech' ? (route.params.slug as string) : null,
)

const filteredTechs = computed(() => {
  const all = technologies.value ?? []
  if (!searchQuery.value) return all
  const q = searchQuery.value.toLowerCase()
  return all.filter(
    (t) => t.name.toLowerCase().includes(q) || t.short_description.toLowerCase().includes(q),
  )
})

function navigate(slug: string | null) {
  searchQuery.value = ''
  if (slug === null) router.push('/')
  else router.push(`/tech/${slug}`)
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: var(--sidebar-width);
  flex-shrink: 0;
  background-color: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__search {
    position: relative;
    padding: 0.75rem;
    border-bottom: 1px solid var(--border-color);
    flex-shrink: 0;

    &-icon {
      position: absolute;
      left: 1.25rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      pointer-events: none;
    }

    &-input {
      width: 100%;
      padding: 0.4rem 1.75rem 0.4rem 2rem;
      background: var(--bg-tertiary);
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
      right: 1.25rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      padding: 2px;
      border-radius: var(--radius-sm);
      transition: color var(--transition);

      &:hover { color: var(--text-primary); }
    }
  }

  &__list {
    flex: 1;
    overflow-y: auto;
    padding: 0.375rem 0;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    width: 100%;
    padding: 0.5rem 0.875rem;
    text-align: left;
    color: var(--text-secondary);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: 400;
    transition: background-color var(--transition), color var(--transition);
    border-left: 2px solid transparent;

    &:hover {
      background-color: var(--bg-tertiary);
      color: var(--text-primary);
    }

    &.active {
      background-color: var(--accent-dim);
      color: var(--accent);
      border-left-color: var(--accent);
      font-weight: 500;
    }

    &--home {
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 0.375rem;
      padding-bottom: 0.625rem;
      color: var(--text-muted);
      font-size: var(--text-xs);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.04em;

      &:hover { color: var(--text-primary); background: none; }
    }

    &-name {
      flex: 1;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
