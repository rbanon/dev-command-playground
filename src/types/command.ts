export type RiskLevel = 'safe' | 'warning' | 'danger'
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced'

export interface Command {
  id: string
  technology_id: string
  command: string
  description: string
  example: string | null
  category: string
  use_case: string
  difficulty_level: DifficultyLevel | null
  risk_level: RiskLevel | null
  is_featured: boolean
  sort_order: number
  created_at: string
  description_en?: string
}
