<template>
  <aside class="sidebar" :class="{ 'sidebar--mobile-open': isMobileExpanded }">

    <!-- Móvil (≤640px): barra compacta con toggle -->
    <button class="sidebar__mobile-bar" @click="isMobileExpanded = !isMobileExpanded">
      <span class="sidebar__mobile-current">{{ activeTechName }}</span>
      <ChevronDown
        :size="16"
        class="sidebar__mobile-chevron"
        :class="{ 'sidebar__mobile-chevron--open': isMobileExpanded }"
      />
    </button>

    <!-- Panel: búsqueda + lista (overlay en móvil, inline en tablet/desktop) -->
    <div class="sidebar__panel">
      <div class="sidebar__search">
        <div class="sidebar__search-field">
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
        <button
          class="sidebar__sort-btn"
          :title="sortOrder === 'asc' ? t('sidebar.sort_asc') : t('sidebar.sort_desc')"
          :aria-label="sortOrder === 'asc' ? t('sidebar.sort_asc') : t('sidebar.sort_desc')"
          @click="toggleSort"
        >
          <ArrowUpAZ v-if="sortOrder === 'asc'" :size="14" />
          <ArrowDownAZ v-else :size="14" />
        </button>
        <button
          v-show="!searchQuery"
          class="sidebar__sort-btn"
          :title="allCollapsed ? t('sidebar.expand_all') : t('sidebar.collapse_all')"
          :aria-label="allCollapsed ? t('sidebar.expand_all') : t('sidebar.collapse_all')"
          @click="toggleAllCategories"
        >
          <ChevronsDown v-if="allCollapsed" :size="14" />
          <ChevronsUp v-else :size="14" />
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

          <!-- Lista plana: cuando se busca o en tablet (pills horizontales) -->
          <template v-if="searchQuery || isTabletPills">
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

          <!-- Vista categorizada: desktop y móvil (overlay) -->
          <template v-else>
            <div
              v-for="group in categorizedTechs"
              :key="group.category"
              class="sidebar__group"
            >
              <button
                class="sidebar__group-header"
                @click="toggleCategory(group.category)"
              >
                <span>{{ t(`sidebar.categories.${group.category}`) }}</span>
                <ChevronDown
                  :size="12"
                  class="sidebar__group-chevron"
                  :class="{ 'sidebar__group-chevron--open': openCategories.has(group.category) }"
                />
              </button>
              <div v-if="openCategories.has(group.category)" class="sidebar__group-items">
                <button
                  v-for="tech in group.techs"
                  :key="tech.id"
                  class="sidebar__item"
                  :class="{ active: activeSlug === tech.slug }"
                  @click="navigate(tech.slug)"
                >
                  <span class="sidebar__item-name">{{ tech.name }}</span>
                </button>
              </div>
            </div>
          </template>
        </template>
      </nav>
    </div>

    <!-- Backdrop: cierra el panel al tocar fuera (solo móvil) -->
    <div v-if="isMobileExpanded" class="sidebar__backdrop" @click="isMobileExpanded = false" />
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search, X, ArrowUpAZ, ArrowDownAZ, ChevronDown, ChevronsUp, ChevronsDown } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useTechnologies } from '@/composables/useTechnologies'
import LoadingState from '@/components/LoadingState.vue'
import EmptyState from '@/components/EmptyState.vue'

const CATEGORY_ORDER = [
  'version_control',
  'shell_cli',
  'languages',
  'infrastructure',
  'nodejs_packages',
  'databases',
  'frontend',
  'ai',
] as const

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const { data: technologies, isLoading, isError } = useTechnologies()
const searchQuery = ref('')
const sortOrder = ref<'asc' | 'desc'>('asc')
const openCategories = reactive(new Set<string>())
const isMobileExpanded = ref(false)

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1280)
function updateWidth() { windowWidth.value = window.innerWidth }
onMounted(() => window.addEventListener('resize', updateWidth))
onUnmounted(() => window.removeEventListener('resize', updateWidth))

const isTabletPills = computed(() => windowWidth.value > 640 && windowWidth.value <= 1024)

const activeSlug = computed(() =>
  route.name === 'tech' ? (route.params.slug as string) : null,
)

const activeTechName = computed(() => {
  if (!activeSlug.value) return t('sidebar.home')
  return technologies.value?.find((tech) => tech.slug === activeSlug.value)?.name ?? activeSlug.value
})

const filteredTechs = computed(() => {
  const all = technologies.value ?? []
  const q = searchQuery.value.toLowerCase()
  return all
    .filter(
      (tech) =>
        tech.name.toLowerCase().includes(q) ||
        tech.short_description.toLowerCase().includes(q),
    )
    .sort((a, b) =>
      sortOrder.value === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    )
})

const categorizedTechs = computed(() => {
  const all = technologies.value ?? []
  const sorted = [...all].sort((a, b) =>
    sortOrder.value === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name),
  )
  return CATEGORY_ORDER
    .map((cat) => ({ category: cat, techs: sorted.filter((t) => t.category === cat) }))
    .filter((g) => g.techs.length > 0)
})

const allCollapsed = computed(() => openCategories.size === 0)

function toggleAllCategories() {
  if (allCollapsed.value) {
    CATEGORY_ORDER.forEach((cat) => openCategories.add(cat))
  } else {
    openCategories.clear()
  }
}

function toggleSort() {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}

function toggleCategory(cat: string) {
  if (openCategories.has(cat)) openCategories.delete(cat)
  else openCategories.add(cat)
}

function navigate(slug: string | null) {
  searchQuery.value = ''
  isMobileExpanded.value = false
  if (slug === null) router.push('/')
  else router.push(`/tech/${slug}`)
}
</script>

<style lang="scss" scoped>
// ─── Desktop (>1024px) ────────────────────────────────────────────────────────
.sidebar {
  width: var(--sidebar-width);
  flex-shrink: 0;
  background-color: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__mobile-bar { display: none; }
  &__backdrop { display: none; }

  &__panel {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }

  &__search {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.75rem;
    border-bottom: 1px solid var(--border-color);
    flex-shrink: 0;

    &-field {
      position: relative;
      flex: 1;
      min-width: 0;
    }

    &-icon {
      position: absolute;
      left: 0.5rem;
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

  &__sort-btn {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.875rem;
    height: 1.875rem;
    color: var(--text-muted);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-tertiary);
    transition: color var(--transition), border-color var(--transition);

    &:hover {
      color: var(--text-primary);
      border-color: var(--accent);
    }
  }

  &__list {
    flex: 1;
    overflow-y: auto;
    padding: 0.375rem 0;
  }

  &__group {
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0.5rem 0.875rem 0.25rem;
      color: var(--text-muted);
      font-family: var(--font-body);
      font-size: var(--text-xs);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      transition: color var(--transition);

      &:hover { color: var(--text-secondary); }
    }

    &-chevron {
      flex-shrink: 0;
      transition: transform var(--transition);

      &--open { transform: rotate(180deg); }
    }
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

// ─── Tablet (641px–1024px): pills horizontales ────────────────────────────────
@media (min-width: 641px) and (max-width: 1024px) {
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    overflow: hidden;

    &__search { display: none; }

    &__list {
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      padding: 0.25rem 0.5rem;
      max-height: none;
      flex-wrap: nowrap;
      gap: 0.25rem;
      scrollbar-width: none;

      &::-webkit-scrollbar { display: none; }
    }

    &__group { display: contents; }

    &__group-header { display: none; }

    &__group-items { display: contents; }

    &__item {
      flex-shrink: 0;
      border-left: none;
      border-bottom: 2px solid transparent;
      border-radius: var(--radius-md);
      padding: 0.35rem 0.625rem;

      &.active {
        background-color: var(--accent-dim);
        border-left-color: transparent;
        border-bottom-color: var(--accent);
      }

      &--home {
        border-bottom: 2px solid transparent;
        border-right: 1px solid var(--border-color);
        margin-bottom: 0;
        padding-bottom: 0.35rem;
        border-radius: 0;
      }
    }
  }
}

// ─── Móvil (≤640px): barra colapsable con overlay ────────────────────────────
@media (max-width: 640px) {
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    overflow: visible;
    position: relative;

    &__mobile-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0.625rem 1rem;
      background: var(--bg-secondary);
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: var(--text-sm);
      font-weight: 500;
      cursor: pointer;
      transition: background-color var(--transition);

      &:hover { background-color: var(--bg-tertiary); }
    }

    &__mobile-current {
      flex: 1;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__mobile-chevron {
      flex-shrink: 0;
      color: var(--text-muted);
      transition: transform var(--transition);
      margin-left: 0.5rem;

      &--open { transform: rotate(180deg); }
    }

    &__panel {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 200;
      background: var(--bg-secondary);
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      box-shadow: var(--shadow-lg);
      max-height: 65vh;
      overflow-y: auto;
    }

    &--mobile-open &__panel {
      display: flex;
      flex-direction: column;
    }

    &__backdrop {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 199;
    }
  }
}
</style>
