import type { CardRestaurant } from '../../contentTypes'
import type { ComponentKeys } from '../componentKeys'
import type { BaseComponent } from '../components.interface'

export interface Board extends BaseComponent {
  __component: ComponentKeys.Board
  carte_du_restaurant: CardRestaurant
  displayTitle?: boolean
  displaySubtitle?: boolean
}
