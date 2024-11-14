import type { BaseComponent } from '../components.interface'
import type { CardRestaurant } from '../../contentTypes'
import { ComponentKeys } from '../componentKeys'

export interface Board extends BaseComponent {
    __component: ComponentKeys.Board;
    carte_du_restaurant: CardRestaurant;
    displayTitle?: boolean;
    displaySubtitle?: boolean;
}