export interface Technology {
  id: string
  slug: string
  name: string
  short_description: string
  icon: string | null
  sort_order: number
  is_visible: boolean
  category: string
}
