export interface Technology {
  id: string
  slug: string
  name: string
  short_description: string
  short_description_en?: string
  icon: string | null
  sort_order: number
  is_visible: boolean
  category: string
}
