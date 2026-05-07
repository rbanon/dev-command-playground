import { ref, computed } from 'vue'

const STORAGE_KEY = 'dcp:favorites'

function loadFavorites(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const favoriteIds = ref<string[]>(loadFavorites())

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds.value))
}

export function useFavorites() {
  function isFavorite(id: string): boolean {
    return favoriteIds.value.includes(id)
  }

  function toggleFavorite(id: string) {
    const idx = favoriteIds.value.indexOf(id)
    if (idx >= 0) {
      favoriteIds.value = favoriteIds.value.filter((f) => f !== id)
    } else {
      favoriteIds.value = [...favoriteIds.value, id]
    }
    persist()
  }

  const count = computed(() => favoriteIds.value.length)

  return { isFavorite, toggleFavorite, favoriteIds, count }
}
