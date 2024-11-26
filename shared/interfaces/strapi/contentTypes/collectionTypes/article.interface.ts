import type { SeoInterface, TimetableComponent } from '../../components'
import type { Media } from '../../components/components.interface'

export interface ArticleItem {
  title: string
  content: string
  media: Media
  visible: boolean
  id: number
  documentId: string
  slug: string
  horaire_restaurant: TimetableComponent
  seo?: SeoInterface
}
