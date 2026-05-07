import { useQuery } from '@tanstack/vue-query'
import { commands } from '@/data'
import type { Ref } from 'vue'

export function useCommands(technologyId: Ref<string | null>) {
  return useQuery({
    queryKey: ['commands', technologyId],
    queryFn: async () => commands.filter((c) => c.technology_id === technologyId.value),
    enabled: () => !!technologyId.value,
    staleTime: Infinity,
  })
}

export function useFeaturedCommands() {
  return useQuery({
    queryKey: ['commands', 'featured'],
    queryFn: async () => commands.filter((c) => c.is_featured).slice(0, 12),
    staleTime: Infinity,
  })
}
