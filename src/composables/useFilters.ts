import { ref, computed, type Ref } from 'vue'
import type { Command } from '@/types/command'

export function useFilters(commands: Ref<Command[] | undefined>) {
  const searchText = ref('')
  const selectedCategory = ref('')
  const selectedUseCase = ref('')
  const selectedLevel = ref('')
  const selectedRisk = ref('')

  const filteredCommands = computed(() => {
    const all = commands.value ?? []

    return all.filter((cmd) => {
      if (selectedCategory.value && cmd.category !== selectedCategory.value) return false
      if (selectedUseCase.value && cmd.use_case !== selectedUseCase.value) return false
      if (selectedLevel.value && cmd.difficulty_level !== selectedLevel.value) return false
      if (selectedRisk.value && cmd.risk_level !== selectedRisk.value) return false

      if (searchText.value) {
        const q = searchText.value.toLowerCase()
        return (
          cmd.command.toLowerCase().includes(q) ||
          cmd.description.toLowerCase().includes(q) ||
          (cmd.example?.toLowerCase().includes(q) ?? false)
        )
      }

      return true
    })
  })

  const categories = computed(() => {
    const all = commands.value ?? []
    return [...new Set(all.map((c) => c.category).filter(Boolean))].sort()
  })

  const useCases = computed(() => {
    const all = commands.value ?? []
    return [...new Set(all.map((c) => c.use_case).filter(Boolean))].sort()
  })

  const hasActiveFilters = computed(
    () =>
      !!(
        searchText.value ||
        selectedCategory.value ||
        selectedUseCase.value ||
        selectedLevel.value ||
        selectedRisk.value
      ),
  )

  function clearFilters() {
    searchText.value = ''
    selectedCategory.value = ''
    selectedUseCase.value = ''
    selectedLevel.value = ''
    selectedRisk.value = ''
  }

  return {
    searchText,
    selectedCategory,
    selectedUseCase,
    selectedLevel,
    selectedRisk,
    filteredCommands,
    categories,
    useCases,
    hasActiveFilters,
    clearFilters,
  }
}
