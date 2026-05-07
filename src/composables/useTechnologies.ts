import { useQuery } from '@tanstack/vue-query'
import { technologies } from '@/data'

export function useTechnologies() {
  return useQuery({
    queryKey: ['technologies'],
    queryFn: async () => technologies,
    staleTime: Infinity,
  })
}
