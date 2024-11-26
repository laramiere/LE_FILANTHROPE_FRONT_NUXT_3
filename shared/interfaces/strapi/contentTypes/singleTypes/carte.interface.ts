import type { Hero, SeoInterface } from '../../components'
import type { CardRestaurant } from '../../contentTypes'

export interface CartInterface {
  hero: Hero
  content?: string
  carte_du_restaurant: CardRestaurant
  seo: SeoInterface
}
